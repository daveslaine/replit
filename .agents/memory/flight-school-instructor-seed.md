---
name: Flight school instructor data is DB-seeded, not hardcoded
description: How instructor info (incl. phone) reaches the Instructors page, and why editing source/seed alone is not enough to change it everywhere.
---

# Instructor data lives in the database, not in the frontend

The flight-school Instructors page renders data fetched live from the api-server
(`/api/instructors`), backed by the `instructors` table. Names, phones, rates,
philosophies, certs are DB rows — not hardcoded in the React page.

The defaults come from a **one-time, non-clobbering seed** in the api-server
(`seedInstructors*`): it inserts the default instructors only into an *empty*
table and records a `seed_history` flag so it never runs again. By design it does
**not** update or overwrite existing rows on later boots (so admin edits persist).

**Why this matters / how to apply:** To change an instructor field (e.g. a phone
number) *everywhere*, editing the seed source is NOT sufficient — it only affects
a brand-new/empty database.

- **Dev DB:** run a direct `UPDATE instructors SET ... WHERE ...` via `executeSql`
  (development), in addition to fixing the seed source for future fresh DBs.
- **Production DB:** tooling access to prod is **read-only**, so you cannot write
  the prod row yourself. The published row must be changed through the live app's
  **admin panel** (`/admin`, gated by `ADMIN_PASSWORD`; instructor CRUD via
  `PUT /api/<admin>/instructors/:id`). Republishing/redeploying does NOT migrate
  data — prod rows keep their old values until edited in the admin panel.

So a "change X everywhere" request that touches instructor data = fix seed source
+ update dev DB row + tell the user to update the prod row in the admin panel.
