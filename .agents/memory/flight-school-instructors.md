---
name: Flight school instructors data
description: Instructor cards are DB-driven; how to change roster/titles so changes apply to existing prod rows.
---

# Flight school instructors data

The Instructors page renders from `GET /api/instructors` (DB table), NOT hardcoded JSX. Photos map by NAME in `InstructorsPage.tsx` `STATIC_PHOTOS`.

**Editing pitfall:** `seedInstructorsIfEmpty` only inserts into an empty table — editing `DEFAULT_INSTRUCTORS` does NOT update existing dev/prod rows. To change existing rows everywhere, add a one-time idempotent backfill in `seedInstructors.ts` (advisory lock + a NEW `seed_history` key, run on startup). Always ALSO update `DEFAULT_INSTRUCTORS`.

**Current roster (Aug 2026, `instructors_roster_update_v2`):** Reza S. deleted entirely (also purged from Testimonials/SEO/admin placeholder). Roster: David T. (sort 0, phone 424-493-2761, real photo), Mark J. (sort 1), Sarah K. (sort 2), Elena M. (sort 3) — the last three are AI-generated headshots in `/images/instructor-{mark,sarah,elena}.jpg` with fictional names. Instructors page shows no prices.
