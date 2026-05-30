---
name: Orval zod codegen conflict
description: The zod orval config schemas option causes duplicate export names; fix by removing it.
---
## The Rule
Remove `schemas: { path: "generated/types", type: "typescript" }` from the `zod` output config in `lib/api-spec/orval.config.ts`. After each codegen run, verify `lib/api-zod/src/index.ts` does NOT have `export * from './generated/types'`.

**Why:** Orval generates both Zod schemas in `generated/api.ts` AND TypeScript interfaces with identical names in `generated/types/`. The barrel re-exports both, causing TS2308 duplicate errors. Zod schemas cover types via `z.infer<>` so the separate types dir is redundant.

**How to apply:** After any codegen run, check `lib/api-zod/src/index.ts` — remove the stale `export * from './generated/types'` line if present.
