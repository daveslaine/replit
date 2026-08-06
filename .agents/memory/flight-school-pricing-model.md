---
name: Flight school pricing model
description: The canonical rate model, fleet, and instructor-display rules for the flight-school site; keep all pages/data internally consistent with it.
---

# Pricing model (source of truth, updated Aug 6 2026)

- Fleet (aircraft provided by a local operator at KVNY — footer says "Aircraft Provided by Local Operator at KVNY"): four Cessna 172 Skyhawks + one Piper PA-28-161 Warrior II. Cash/Credit hourly: 172S(2001) $170/$175, 172S(2004) $170/$175, PA-28-161 $165/$170, 172P $160/$165, 172N $145/$150. Cards + per-type V-speeds live in `OurAircraftPage.tsx` (hardcoded JSX, NOT the /api/aircraft DB).
- Marketing rates: aircraft "Starting at $145/hr wet", instructor "$35/hr", combined dual "from $180/hr". No block-rate framing, no "(+$20/hr to school)" sub-lines.
- Discovery Flight: $199.99 (1 person), $249.99 (with 1 passenger). DealsPage-only coupons: Discovery $10 off → $189.99; First 2 Flights instructor $25/hr → dual from $170/hr (standard $35/$180 everywhere else).
- Private Pilot headline price: "As low as $8,100" + qualifier "Assumes minimum of 45 hours at $180/hr Dual (Aircraft + Instructor)"; typical-range prose stays 60–75 hrs ≈ $10,800–$13,500. No $9,500/$9,900–$14,500 figures anywhere.
- Phone: 424-493-2761. Address: 16425 Hart St, Van Nuys, CA 91406.
- The old single aircraft N9172Y (1985 Piper Warrior) is GONE: no references, no photos. Generic stock images `cessna-skyhawk.webp`/`warrior-exterior.png` DELETED — use real fleet photos in `/images/fleet/` (n523er, n21705, n96575, n5298j, n6393c) and heroes `/images/hero-{airliner-gate,ramp-dusk,cockpit-dusk}.jpg`; SEO default image is `/images/fleet/n523er-1.jpg`. All page heroes use a background-photo + navy overlay pattern.

**Why:** Aug 2026 overhaul — school switched from one owned airplane to an operator-provided fleet; new phone/address; Reza removed from the business.

**How to apply:** On any base-rate change, recompute derived math in `src/data/landingPages.ts`, `landingUniqueTopics.ts`, `landingUniqueAreas.ts` and page prose (1.5-hr lesson ≈ $220 at $145+$35; 65 hr dual ≈ $11,700; PPL all-in ≈ $12,500–$13,500). Sweep stale literals: `$200/hr $250/hr $205/hr $50/hr N9172Y 9172 323-332-0585 7910 Balboa Reza`.
