---
name: Flight school instructors data
description: Instructor cards are DB-driven; how to change title/order so it applies to existing prod rows.
---

# Flight school instructors data

The Instructors page cards render client-side from `GET /api/instructors`
(DB-backed `instructors` table), NOT from hardcoded JSX. So title, order
(`sort_order`), rates, phone are DATA, not markup.

**Editing pitfall:** `seedInstructorsIfEmpty` only inserts when the table is
empty — editing `DEFAULT_INSTRUCTORS` does NOT update existing dev/prod rows
(prod data is never migrated on publish). To change existing rows everywhere, add
a one-time idempotent backfill like `applyInstructorContentFixes` in
`seedInstructors.ts`: advisory lock + a NEW `seed_history` key, run once on
startup after seeding. Because it runs once ever, later admin-panel edits are not
clobbered. Always ALSO update `DEFAULT_INSTRUCTORS` so fresh DBs match.

**Editorial decisions made:** Reza S. title is intentionally empty "" (user wanted
"Owner" removed, just his name); card hides the title `<p>` when title is empty.
David T. is sort_order 0 (left), Reza S. sort_order 1 (right).
