"use client";

import { useEffect, useRef } from "react";

type GalaxyCanvasProps = {
  reducedMotion?: boolean;
};

type ThreeWindow = Window & {
  THREE?: any;
};

let threeLoader: Promise<void> | null = null;

function loadScript(src: string, id: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;

    if (existing) {
      if ((window as ThreeWindow).THREE?.OrbitControls) {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = false;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function loadThree() {
  if ((window as ThreeWindow).THREE?.OrbitControls) return Promise.resolve();

  if (!threeLoader) {
    threeLoader = loadScript(
      "https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js",
      "bimarsh-three",
    ).then(() =>
      loadScript(
        "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js",
        "bimarsh-orbit-controls",
      ),
    );
  }

  return threeLoader;
}

export default function GalaxyCanvas({ reducedMotion = false }: GalaxyCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;

    loadThree()
      .then(() => {
        if (disposed || !mountRef.current) return;

        const THREE = (window as ThreeWindow).THREE;
        if (!THREE?.OrbitControls) return;

        const mount = mountRef.current;
        const isTouchDevice =
          window.matchMedia("(pointer: coarse)").matches ||
          "ontouchstart" in window;
        const width = mount.clientWidth;
        const height = mount.clientHeight;

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        renderer.setSize(width, height);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.display = "block";
        renderer.domElement.style.touchAction = isTouchDevice ? "pan-y" : "none";
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
        camera.position.set(0, 2.5, 10);
        camera.lookAt(0, 0, 0);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.045;
        controls.enablePan = false;
        controls.enableZoom = !isTouchDevice;
        controls.enableRotate = !isTouchDevice || !reducedMotion;
        controls.minDistance = 5.2;
        controls.maxDistance = 17;
        controls.autoRotate = !reducedMotion;
        controls.autoRotateSpeed = 0.32;
        controls.rotateSpeed = 0.42;
        controls.target.set(0, 0, 0);

        const galaxy = new THREE.Group();
        scene.add(galaxy);

        const particleCount = isTouchDevice ? 18000 : 50000;
        const armCount = 4;
        const radiusMax = 5.8;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const inner = new THREE.Color("#ffb45c");
        const core = new THREE.Color("#ffc66d");
        const outer = new THREE.Color("#8b5cf6");

        for (let i = 0; i < particleCount; i += 1) {
          const i3 = i * 3;
          const progress = Math.pow(Math.random(), 0.72);
          const radius = progress * radiusMax;
          const arm = i % armCount;
          const armAngle = (arm / armCount) * Math.PI * 2;
          const spiral = progress * 11.5;
          const scatter = (Math.random() - 0.5) * (0.22 + progress * 0.82);
          const angle = armAngle + spiral + scatter;
          const localCloud = Math.pow(Math.random(), 1.8) * (1.05 - progress * 0.5);

          positions[i3] = Math.cos(angle) * (radius + localCloud);
          positions[i3 + 1] =
            (Math.random() - 0.5) *
            (0.12 + progress * 0.42) *
            (0.7 + Math.random());
          positions[i3 + 2] = Math.sin(angle) * (radius + localCloud);

          const hueMix = THREE.MathUtils.smoothstep(progress, 0, 1);
          const color = inner.clone();

          if (hueMix < 0.25) {
            color.lerp(core, hueMix / 0.25);
          } else {
            color.lerp(outer, (hueMix - 0.25) / 0.75);
          }

          const brightness = 0.78 + Math.random() * 0.42;
          colors[i3] = Math.min(color.r * brightness, 1);
          colors[i3 + 1] = Math.min(color.g * brightness, 1);
          colors[i3 + 2] = Math.min(color.b * brightness, 1);
          sizes[i] = (0.55 + Math.random() * 1.15) * (1.1 - progress * 0.38);
        }

        const galaxyGeometry = new THREE.BufferGeometry();
        galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        galaxyGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        const galaxyMaterial = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexColors: true,
          uniforms: {
            uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
            uReducedMotion: { value: reducedMotion ? 1 : 0 },
            uTime: { value: 0 },
          },
          vertexShader: `
            attribute float size;
            varying vec3 vColor;
            uniform float uPixelRatio;

            void main() {
              vColor = color;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              float depth = max(1.0, -mvPosition.z);
              gl_PointSize = min(size * uPixelRatio * (220.0 / depth), 12.0 * uPixelRatio);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;

            void main() {
              vec2 uv = gl_PointCoord - vec2(0.5);
              float distanceFromCenter = length(uv);
              float alpha = 1.0 - smoothstep(0.08, 0.5, distanceFromCenter);

              if (alpha < 0.015) discard;

              gl_FragColor = vec4(vColor, alpha * 0.92);
            }
          `,
        });

        const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
        galaxy.add(galaxyPoints);

        const starCount = isTouchDevice ? 450 : 1100;
        const starPositions = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i += 1) {
          const i3 = i * 3;
          const distance = 11 + Math.random() * 13;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);

          starPositions[i3] = distance * Math.sin(phi) * Math.cos(theta);
          starPositions[i3 + 1] = distance * Math.cos(phi);
          starPositions[i3 + 2] = distance * Math.sin(phi) * Math.sin(theta);

          const tint = 0.62 + Math.random() * 0.38;
          starColors[i3] = tint;
          starColors[i3 + 1] = tint * 0.9;
          starColors[i3 + 2] = 1;
        }

        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

        const starMaterial = new THREE.PointsMaterial({
          size: isTouchDevice ? 0.055 : 0.07,
          vertexColors: true,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });

        scene.add(new THREE.Points(starGeometry, starMaterial));

        const glow = new THREE.Mesh(
          new THREE.SphereGeometry(0.42, 32, 32),
          new THREE.MeshBasicMaterial({
            color: "#ffbd66",
            transparent: true,
            opacity: 0.12,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        );
        galaxy.add(glow);

        const glowOuter = new THREE.Mesh(
          new THREE.SphereGeometry(0.95, 32, 32),
          new THREE.MeshBasicMaterial({
            color: "#8b5cf6",
            transparent: true,
            opacity: 0.028,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        );
        galaxy.add(glowOuter);

        const clock = new THREE.Clock();
        const initialRotation = -0.24;
        galaxy.rotation.x = initialRotation;
        galaxy.rotation.z = 0.22;

        let animationFrame = 0;

        const render = () => {
          animationFrame = window.requestAnimationFrame(render);

          const elapsed = clock.getElapsedTime();
          galaxyMaterial.uniforms.uTime.value = elapsed;

          if (!reducedMotion) {
            galaxy.rotation.y += 0.00045;
            galaxy.rotation.z += 0.000015;
          }

          controls.update();
          renderer.render(scene, camera);
        };

        const handleResize = () => {
          if (!mount.clientWidth || !mount.clientHeight) return;

          const nextWidth = mount.clientWidth;
          const nextHeight = mount.clientHeight;

          camera.aspect = nextWidth / nextHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(nextWidth, nextHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
          galaxyMaterial.uniforms.uPixelRatio.value =
            Math.min(window.devicePixelRatio || 1, 1.75);
        };

        window.addEventListener("resize", handleResize);
        render();

        cleanup = () => {
          window.removeEventListener("resize", handleResize);
          window.cancelAnimationFrame(animationFrame);
          controls.dispose();
          galaxyGeometry.dispose();
          galaxyMaterial.dispose();
          starGeometry.dispose();
          starMaterial.dispose();
          glow.geometry.dispose();
          glow.material.dispose();
          glowOuter.geometry.dispose();
          glowOuter.material.dispose();
          renderer.dispose();

          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      })
      .catch(() => {
        // The hero remains fully usable if the optional 3D enhancement cannot load.
      });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [reducedMotion]);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-auto" aria-hidden="true" />;
}
