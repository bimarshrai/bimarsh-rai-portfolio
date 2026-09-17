# Portfolio lint/build fixes

Applied to the 12-project merged portfolio:

- Fixed malformed SOLAIRE JSX `onMouseMove` syntax.
- Fixed malformed VERDICT `AnimatePresence` closing syntax.
- Fixed ORBIT `SectionLabel` children passed as a prop; converted to nested children.
- Removed unused ORBIT icon imports and unused variables.
- Removed unused FRAME/MUSE/NEXUS map index variables where not needed.
- Removed unused NEXUS `ChevronDown` import.
- Escaped apostrophes in JSX text for FRAME, MUSE, NEXUS, ORBIT, SOLAIRE, VERDICT and VOW.
- Removed unused `Project` import from `lib/data/projects.ts`.
- Addressed the Next.js `<img>` lint warnings in FORMA, FRAME, MUSE and NEXUS with an explicit file-level exception because these project concepts use remote editorial images directly. This keeps the existing image behavior intact; it can later be migrated to `next/image` with remote image configuration if desired.
- Fixed the unclosed comment in `app/globals.css` that was causing the original PostCSS/Turbopack `CssSyntaxError`.
- Verified all TypeScript/TSX files have zero TypeScript parser diagnostics using the TypeScript parser.
- Verified CSS files have balanced braces and balanced block comments.

A full `npm run lint` / `npm run build` could not be executed in the packaging environment because npm dependency installation could not complete within the available network/time limit.
