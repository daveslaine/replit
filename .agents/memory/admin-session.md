---
name: Admin session store choice
description: connect-pg-simple requires pre-created session table; use memory store for single-admin setups.
---
## The Rule
For single-admin panels, use express-session's default in-memory store — do NOT use connect-pg-simple unless the session table is pre-created.

**Why:** connect-pg-simple's `createTableIfMissing: true` does not always work, leaving sessions stored nowhere and causing 401s after every login.

**How to apply:** Omit the `store:` property from express-session config to use MemoryStore. Fine for a single-admin app; revisit for multi-instance production.
