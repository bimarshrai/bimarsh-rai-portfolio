import { ImageResponse } from "next/og";

export const alt = "Bimarsh Rai — Web Designer & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#09090B", color: "#FFFFFF", fontFamily: "Arial" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 2, color: "#A855F7", marginBottom: 28 }}>BIMARSH RAI</div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>Web Designer & Developer</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: "#A1A1AA" }}>Modern websites built to stand out.</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#71717A" }}>bimarsh-rai-portfolio.vercel.app</div>
      </div>
    ),
    size
  );
}
