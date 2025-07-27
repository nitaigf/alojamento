// apps/backend/src/controllers/userController.ts
import { createUser } from "../commands/createUser";
import { listUsers } from "../queries/listUsers";
import { t, type Elysia } from "elysia";

export const UserController = (app: Elysia) =>
  app
    .post("/users", async ({ body }) => {
      const id = await createUser(body);
      return { success: true, id };
    }, {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
        password: t.String({ minLength: 6 }),
      }),
    })
    .get("/users", async () => {
      const users = await listUsers();
      return users;
    });
