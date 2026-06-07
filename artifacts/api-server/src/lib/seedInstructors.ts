import { sql } from "drizzle-orm";
import { db, instructorsTable, seedHistoryTable, type InsertInstructor } from "@workspace/db";
import { logger } from "./logger";

const SEED_KEY = "instructors_seed_v1";
// Arbitrary constant for pg_advisory_xact_lock so concurrent instances serialize.
const SEED_LOCK_ID = 918_469;

const DEFAULT_INSTRUCTORS: InsertInstructor[] = [
  {
    name: "Reza S.",
    title: "Flight Instructor & Instrument Instructor",
    phone: "(310) 490-0402",
    bio: null,
    teachingPhilosophy:
      "I believe in building a foundation of flawless fundamentals. My goal is to produce pilots who don't just pass checkrides, but possess the situational awareness and aeronautical decision-making skills to manage any scenario safely. Structure and transparency from day one eliminate frustration and build confident aviators.",
    rateStandard: 45,
    rateBlock: 35,
    certifications: ["Commercial Multi-Engine", "CFI", "CFII"],
    photoObjectPath: null,
    photoPosition: "top",
    sortOrder: 1,
    active: true,
  },
  {
    name: "David T.",
    title: "Flight Instructor & Instrument Instructor",
    phone: "323-332-0585",
    bio: null,
    teachingPhilosophy:
      "I believe in putting the student first. I will not be there to waste your time and take your money, or throw you under the bus. I am transparent and upfront, and my goal is to serve you and ensure you pass, and know what is going on and what it is you are doing. You will feel certain when training with me, and my satisfaction comes from seeing you pass.",
    rateStandard: 35,
    rateBlock: 30,
    certifications: ["Commercial Pilot", "CFI", "CFII"],
    photoObjectPath: null,
    photoPosition: "top",
    sortOrder: 0,
    active: true,
  },
];

/**
 * Seeds the default instructors exactly once, ever, per database.
 *
 * Safety / correctness guarantees:
 * - One-time: a row in `seed_history` (key = SEED_KEY) records that seeding ran.
 *   Once set it is never seeded again — so if an admin later deletes every
 *   instructor via the admin panel, a restart will NOT resurrect the defaults.
 * - Concurrency-safe: the whole "has it run? / is it empty? / insert / mark"
 *   sequence runs inside a transaction guarded by a Postgres advisory lock, so
 *   multiple instances booting at once (Autoscale) cannot double-insert.
 * - Non-clobbering: if the table already has rows (e.g. data entered manually
 *   before first boot), it records the flag without inserting duplicates.
 *
 * Purpose: give a freshly provisioned database (notably production on its first
 * deploy) sensible default content without manual data entry.
 */
export async function seedInstructorsIfEmpty(): Promise<void> {
  try {
    await db.transaction(async (tx) => {
      await tx.execute(sql`SELECT pg_advisory_xact_lock(${SEED_LOCK_ID})`);

      const already = await tx
        .select({ key: seedHistoryTable.key })
        .from(seedHistoryTable)
        .where(sql`${seedHistoryTable.key} = ${SEED_KEY}`)
        .limit(1);
      if (already.length > 0) {
        return;
      }

      const existing = await tx.select({ id: instructorsTable.id }).from(instructorsTable).limit(1);
      if (existing.length === 0) {
        await tx.insert(instructorsTable).values(DEFAULT_INSTRUCTORS);
        logger.info({ count: DEFAULT_INSTRUCTORS.length }, "Seeded default instructors into empty table");
      }

      await tx.insert(seedHistoryTable).values({ key: SEED_KEY });
    });
  } catch (err) {
    logger.error({ err }, "Failed to seed default instructors");
  }
}

const FIX_KEY = "instructors_fix_owner_order_v1";
const FIX_LOCK_ID = 918_470;

/**
 * One-time content correction applied to databases that were already seeded
 * before these editorial decisions were made:
 * - Reza S. should display without an "Owner" title (just his name).
 * - David T. should appear first (left), Reza S. second (right).
 *
 * Runs exactly once per database (recorded in `seed_history` under FIX_KEY),
 * guarded by an advisory lock so concurrent Autoscale instances don't race.
 * Because it runs only once, later admin edits in the panel are never clobbered.
 */
export async function applyInstructorContentFixes(): Promise<void> {
  try {
    await db.transaction(async (tx) => {
      await tx.execute(sql`SELECT pg_advisory_xact_lock(${FIX_LOCK_ID})`);

      const already = await tx
        .select({ key: seedHistoryTable.key })
        .from(seedHistoryTable)
        .where(sql`${seedHistoryTable.key} = ${FIX_KEY}`)
        .limit(1);
      if (already.length > 0) {
        return;
      }

      await tx
        .update(instructorsTable)
        .set({ title: "", sortOrder: 1 })
        .where(sql`${instructorsTable.name} = 'Reza S.'`);
      await tx
        .update(instructorsTable)
        .set({ sortOrder: 0 })
        .where(sql`${instructorsTable.name} = 'David T.'`);

      await tx.insert(seedHistoryTable).values({ key: FIX_KEY });
      logger.info("Applied one-time instructor content fixes");
    });
  } catch (err) {
    logger.error({ err }, "Failed to apply instructor content fixes");
  }
}

const TITLE_FIX_KEY = "instructors_fix_titles_v1";
const TITLE_FIX_LOCK_ID = 918_471;
const INSTRUCTOR_TITLE = "Flight Instructor & Instrument Instructor";

/**
 * One-time title correction for databases seeded before both instructors were
 * given the same displayed title. Sets Reza S. and David T. to
 * "Flight Instructor & Instrument Instructor".
 *
 * Runs exactly once per database (recorded under TITLE_FIX_KEY) behind an
 * advisory lock, so it is safe under concurrent Autoscale boots and never
 * clobbers later admin-panel edits.
 */
export async function applyInstructorTitleFixes(): Promise<void> {
  try {
    await db.transaction(async (tx) => {
      await tx.execute(sql`SELECT pg_advisory_xact_lock(${TITLE_FIX_LOCK_ID})`);

      const already = await tx
        .select({ key: seedHistoryTable.key })
        .from(seedHistoryTable)
        .where(sql`${seedHistoryTable.key} = ${TITLE_FIX_KEY}`)
        .limit(1);
      if (already.length > 0) {
        return;
      }

      await tx
        .update(instructorsTable)
        .set({ title: INSTRUCTOR_TITLE })
        .where(sql`${instructorsTable.name} IN ('Reza S.', 'David T.')`);

      await tx.insert(seedHistoryTable).values({ key: TITLE_FIX_KEY });
      logger.info("Applied one-time instructor title fixes");
    });
  } catch (err) {
    logger.error({ err }, "Failed to apply instructor title fixes");
  }
}
