---
name: Flight school logo assets
description: Header/footer logo handling — "transparent" PNGs often ship opaque white bg; legibility across transparent/scrolled header states.
---

# Logo assets (header + footer)

- Header is transparent over the dark navy hero at page top (`scrolled` false) and turns solid white after scroll (`scrolled` true). Logo must read in BOTH states.
- The current brand mark is blue "AFS" + orange/yellow speed stripe + white "ACCELERATED FLIGHT SCHOOL" banner. It already contains the school name, so do NOT add a separate text span next to it (header and footer).
- **Gotcha:** user-supplied "transparent" logo PNGs have repeatedly shipped with an *opaque white background* (PNG colorType reports RGBA/6, but background pixels are fully opaque white). This renders as an ugly white box behind the logo over the dark hero. Fix: run the remove-image-background tool on the file after copying it in.
  - **Why:** blue/colored letters need real transparency to sit on the navy hero; a baked white box breaks the transparent-header design.
- Blue-on-navy is low contrast at the top state. Apply a white glow drop-shadow only when transparent, e.g. `drop-shadow(0 0 2px rgba(255,255,255,0.6)) drop-shadow(0 1px 4px rgba(0,0,0,0.45))`; no filter when scrolled (blue-on-white is already high contrast). Footer is navy too, so it uses the same glow.
- Logo files live in `artifacts/flight-school/public/images/`. Active mark: `afs-logo.png`. `logo.png` (old plain blue) is legacy and still referenced by SeoSchema.
