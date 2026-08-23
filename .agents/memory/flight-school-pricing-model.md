---
name: Flight school pricing model
description: The canonical rate model, fleet, and instructor-display rules for the flight-school site; keep all pages/data internally consistent with it.
---

# Pricing model (source of truth, updated Aug 23 2026)

- Fleet (aircraft provided by a local operator at KVNY — footer says "Aircraft Provided by Local Operator at KVNY"): four Cessna 172 Skyhawks + one Piper PA-28-161 Warrior II. Cash/Credit hourly: 172S(2001) $175/$182, 172S(2004) $175/$182, PA-28-161 $175/$182, 172P $170/$177, 172N $155/$160. Cards + per-type V-speeds live in `OurAircraftPage.tsx` (hardcoded JSX, NOT the /api/aircraft DB).
- Marketing rates: aircraft "Starting at $155/hr wet", instructor "$35/hr", combined dual "from $185/hr". NOTE: $185 is the owner's chosen ADVERTISED rate (155+35=190; owner said "just do $185, no notes") — do not "fix" it to $190 or add qualifiers. No block-rate framing, no "(+$20/hr to school)" sub-lines.
- Discovery Flight: $199.99 (1 person), $249.99 (with 1 passenger). DealsPage-only coupons: Discovery $10 off → $189.99; First 2 Flights instructor $25/hr → dual from $180/hr (standard $35/$185 everywhere else).
- Private Pilot headline price: "As low as $8,325" (45 hrs × $185 dual); typical-range prose 60–75 hrs ≈ $11,100–$13,875; 55 hrs ≈ $10,175. Instrument all-in ≈ $8,700–$15,400, flight-only 40–60 hrs ≈ $7,400–$11,100. No $8,100/$9,500/$9,900–$14,500 figures anywhere.
- Phone: 424-493-2761. Address: 16425 Hart St, Van Nuys, CA 91406.
- The old single aircraft N9172Y (1985 Piper Warrior) is GONE: no references, no photos. Generic stock images `cessna-skyhawk.webp`/`warrior-exterior.png` DELETED — use real fleet photos in `/images/fleet/` (n523er, n21705, n96575, n5298j, n6393c) and heroes `/images/hero-{airliner-gate,ramp-dusk,cockpit-dusk}.jpg`; SEO default image is `/images/fleet/n523er-1.jpg`. All page heroes use a background-photo + navy overlay pattern.

**Why:** Aug 2026 overhaul — school switched from one owned airplane to an operator-provided fleet; new phone/address; Reza removed from the business.

**How to apply:** On any base-rate change, recompute derived math in `src/data/landingPages.ts`, `landingUniqueTopics.ts`, `landingUniqueAreas.ts`, page prose, AND `public/llms.txt` (per-aircraft cash/credit blocks + estimates; bump its "Last updated" date). Derived examples at $185 dual: 1.5-hr lesson ≈ $285 ($155+$35 components); 65 hr ≈ $12,025; weekly 2×1.5hr ≈ $555; monthly ≈ $2,220; PPL all-in ≈ $12,800–$13,800. Sweep stale literals and run an architect review — buried prose math (weekly/monthly budgets, two-student comparisons, all-in ranges) hides stale figures that greps for headline rates miss. Bump sitemap lastmod truthfully on real content changes.
