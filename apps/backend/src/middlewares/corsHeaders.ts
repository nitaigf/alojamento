// apps/backend/src/middlewares/corsHeaders.ts
import { cors } from "@elysiajs/cors";
import type { Elysia } from "elysia";
import { env } from "../config";

export const withCors = (app: Elysia) =>
  app
    .use(cors({
      origin: env.appHost, // ← O app frontend (cliente) é quem faz o fetch
      credentials: true,
    }))
    .onBeforeHandle(({ set }) => {
      set.headers["Access-Control-Allow-Origin"] = env.appHost;
      set.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
      set.headers["Access-Control-Allow-Headers"] = "Content-Type";
      set.headers["Access-Control-Allow-Credentials"] = "true";
    })
    .options("/*", () => new Response(null, { status: 204 }));
