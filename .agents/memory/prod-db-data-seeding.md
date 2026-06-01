---
name: Production DB data does not migrate on Publish
description: Why prod showed empty data despite working dev, and the seed pattern used to fix it
---

# Production database data is NOT migrated on Publish

Replit's Publish flow diffs and migrates the **schema** dev→prod, but it does **NOT** copy table **data**. Dev and prod are separate databases. So content entered only in the dev DB (via an admin panel, manual SQL, etc.) is invisible on the live site even though the page works locally.

Symptom seen: `/api/instructors` returned full data on `localhost` but `[]` on the production domain — the instructors page rendered no cards/photos live.

**Why:** the agent's `executeSql` against production is **read-only** (SELECT only). You cannot INSERT/UPDATE prod data from agent tooling. The supported ways to get data into prod are (a) the app's own DB connection at runtime, or (b) an admin UI on the live site.

**How to apply — idempotent one-time startup seed pattern:**
For essentially-static default content (e.g. a couple of instructors), add a seed that runs from the API server's `app.listen` callback. Make it:
- **One-time:** record a flag row in a `seed_history` table (key like `instructors_seed_v1`); never seed again once the flag exists — so an admin deleting all rows + a restart will NOT resurrect defaults.
- **Concurrency-safe:** wrap "check flag / check empty / insert / set flag" in a transaction guarded by `pg_advisory_xact_lock(<const>)`, because Autoscale can boot multiple instances simultaneously and a bare check-then-insert double-inserts.
- **Non-clobbering:** if the table already has rows, set the flag without inserting.

The new `seed_history` table reaches prod via the normal Publish schema migration; the seed then fills prod data on first deploy. User must Publish for it to take effect.
