---
name: Flight school blocking CSS
description: First-paint styling requirement for the prerendered flight-school site.
---

The site’s global stylesheet must load as a blocking stylesheet directly from the HTML head. Do not move global CSS back behind the deferred client entry or hydration boundary.

**Why:** Deferring the JavaScript entry while importing global CSS only from that entry caused prerendered markup to paint unstyled for several seconds on cold mobile and desktop loads.

**How to apply:** Performance work may continue deferring hydration and client JavaScript, but the compiled global stylesheet must remain discoverable from the initial HTML head on every prerendered route. Cold-load tests should verify the first visible content is styled.