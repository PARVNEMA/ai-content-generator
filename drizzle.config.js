import { defineConfig } from "drizzle-kit";
export default defineConfig({
	dialect: "postgresql",
	schema: "./utils/Schema.tsx",
	dbCredentials: {
		url: "postgresql://mysass_owner:H9Uewz0AqdSD@ep-noisy-tooth-a1ozs776.ap-southeast-1.aws.neon.tech/ai-content-generator?sslmode=require",
	},
});
