// apps/backend/index.ts
import { bootstrapApp } from "./app";
import { env } from "./config";
import { connectToDatabase } from "./database/mongo";

const startServer = async () => {
  await connectToDatabase();

  const app = bootstrapApp();

  app.listen(env.apiPort, () => {
    console.log(
      `🦊 Elysia 🚀 backend rodando em ${app.server?.hostname}:${app.server?.port}`
    );
  });
};

startServer();