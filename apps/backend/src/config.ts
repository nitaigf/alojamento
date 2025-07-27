// apps/backend/config.ts
import * as v from 'valibot';

const EnvSchema = v.object({
  mongoUri: v.string(),
  dbName: v.optional(v.string()),
  appHost: v.string(),
  apiHost: v.string(),
  apiPort: v.pipe(v.string(), v.transform((s) => parseInt(s, 10))),
});

export const env = v.parse(EnvSchema, {
  mongoUri: process.env.MONGO_URI!,
  dbName: process.env.DB_NAME || "alojamento",
  appHost: process.env.APP_HOST || "http://localhost:5173",
  apiHost: process.env.API_HOST || "http://localhost:3000",
  apiPort: process.env.API_PORT || "3000",
});

if (!env) {
  throw new Error("Invalid environment variables");
}