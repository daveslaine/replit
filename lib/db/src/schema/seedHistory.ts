import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const seedHistoryTable = pgTable("seed_history", {
  key: text("key").primaryKey(),
  appliedAt: timestamp("applied_at", { withTimezone: true }).notNull().defaultNow(),
});

export type SeedHistory = typeof seedHistoryTable.$inferSelect;
