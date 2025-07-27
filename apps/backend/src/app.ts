// apps/backend/src/app.ts
import { Elysia } from "elysia";
import { config } from "dotenv";
import { withCors } from "./middlewares/corsHeaders";
import { UserController } from "./controllers/userController";
import { LoginController } from "./controllers/loginController";

config();

export const bootstrapApp = () => {
  const app = new Elysia();

  withCors(app);

  UserController(app);
  LoginController(app);

  return app;
};
