import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import "./envConfig";

export default defineConfig({
    out: './db/drizzle',
    schema: './db/schema.ts',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.TURSO_DATABASE_URL || "",
        authToken: process.env.TURSO_AUTH_TOKEN || "",
    },
});
