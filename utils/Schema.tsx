import {
	date,
	pgTable,
	serial,
	text,
	varchar,
} from "drizzle-orm/pg-core";

export const AiOutput = pgTable("aiOutput", {
	id: serial("id").primaryKey(),
	formData: varchar("FormData").notNull(),
	aiResponse: text("aiResponse"),
	templateSlug: varchar("templateSlug").notNull(),
	createdBy: varchar("email").notNull(),
	createdAt: varchar("createdAt"),
});
