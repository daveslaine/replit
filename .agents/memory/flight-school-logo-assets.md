---
name: Flight school logo assets
description: Header/footer logo handling — two-logo system across transparent/scrolled states; "transparent" PNGs often ship opaque white bg.
---

# Logo assets (header + footer)

- Header is transparent over the dark navy hero at page top (`scrolled` false) and turns solid white after scroll (`scrolled` true). The logo must read in BOTH states, so two different logos are used.
- **Design system (current):**
  - Dark backgrounds (transparent header top state + footer): white wordmark `logo.png` with CSS `filter: brightness(0) invert(1)` PLUS a separate white "Accelerated Flight School" text span. `logo.png` is a plain AFS letterform with no built-in name banner, so the text span is required here.
  - Light backgrounds (scrolled header + mobile sheet): the full colored brand mark `afs-logo-new.png` (blue "AFS" + orange/yellow speed stripe + "ACCELERATED FLIGHT SCHOOL" banner). It already contains the school name, so do NOT add a text span next to it.
- **Gotcha:** user-supplied "transparent" logo PNGs have repeatedly shipped with an *opaque white background* (PNG colorType reports RGBA/6 but background pixels are fully opaque white), which renders as an ugly white box over the dark hero. Fix: run the remove-image-background tool after copying it in. (`afs-logo-new.png` was genuinely transparent — corners srgba(0,0,0,0) — so it needed no fix; always check before assuming.)
- **Favicons** were generated from an AFS-only crop of the colored mark via ImageMagick `magick` (PIL/sharp unavailable). Active set in `public/`: `favicon.ico` (bundles 16/32/48), `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`; linked from `index.html`. Old `favicon.svg` removed.
- Logo files live in `artifacts/flight-school/public/images/`. Active: `afs-logo-new.png` (colored, light bg) and `logo.png` (white-able wordmark, dark bg; also referenced by SeoSchema). Superseded variants (`afs-logo.png`, `afs-logo-red.png`, `afs-mark.png`) were deleted.
- **Footer socials:** use `react-icons` — `FcGoogle` (multicolor, color prop ignored) linking the Google Business profile, and `SiYelp` set red via `style={{color:"#d32323"}}` (uses currentColor) linking the Yelp page — on white circular badges. Facebook/Instagram were removed.
