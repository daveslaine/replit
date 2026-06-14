---
name: Flight school pricing model
description: The canonical rate model and instructor-display rule for the flight-school site; keep all pages/data internally consistent with it.
---

# Pricing model (source of truth for arithmetic)

- Aircraft rental: **$175/hr** standard (wet), **$165/hr** on the 10-hour block.
- Instructor: presented as **"From $40/hr"** with a small sub/parenthetical **"(+$20/hr to the flight school)"**. The $40 is the student-facing instructor rate; the school takes an additional $20/hr.
- Combined dual = aircraft + $40 instructor: **$215/hr** standard, **$205/hr** on the 10-hour block.
- There are **no 30-hour packages** (removed). The only legitimate "30 hours" mention is the Part 61 AATD simulator-credit line on the instrument page — that is NOT a package.

**Why:** A sitewide overhaul standardized rates and removed instructor names from every page except the instructors page. Derived figures (program-cost ranges, weekly examples, instrument budgets) are computed off these base rates, so any base-rate change must cascade.

**How to apply:**
- Instructor field on **every page except `InstructorsPage`** must be name-less and show "From $40/hr" + "(+$20/hr to the flight school)". No discounted instructor rates (e.g. an old "Instructor Solo $20/hr" row) — they were removed for consistency. The instructors page shows **no prices at all**.
- Never write the full name "David Tom"; "David T." is acceptable. Names live only in `InstructorsPage`, admin, and `Testimonials`.
- When changing any base rate, recompute every derived number in `src/data/landingPages.ts`, `landingUniqueTopics.ts`, `landingUniqueAreas.ts`, and in-page prose (program ranges, weekly examples like 3hr×block, instrument budgets like 45×$205=$9,225). After edits, sweep for stale literals: `$185 $195 $180 $150/hr $35/hr $30/hr` and the strings `30-Hour Package`, `Instructor Solo`.
