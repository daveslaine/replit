import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const aircraftTable = pgTable("aircraft", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  specs: text("specs"),
  photoObjectPath: text("photo_object_path"),
  comingSoon: boolean("coming_soon").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertAircraftSchema = createInsertSchema(aircraftTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertAircraft = z.infer<typeof insertAircraftSchema>;
export type Aircraft = typeof aircraftTable.$inferSelect;
