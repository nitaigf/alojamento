// app/src/controllers/loginController.ts
import { t, type Elysia } from "elysia";
import { getDb } from "../database/mongo";

export const LoginController = (app: Elysia) =>
  app.post('/login', async ({ body }) => {
    const { identifier, password } = body;

    const db = getDb();
    const user = await db.collection('users').findOne({
      $or: [
        { email: identifier },
        { username: identifier }
      ]
    });

    if (!user || !(await Bun.password.verify(password, user.passwordHash))) {
      return new Response(JSON.stringify({ message: 'Credenciais inválidas' }), { status: 401 });
    }

    return { user: { id: user._id, name: user.name, email: user.email } };
  }, {
    body: t.Object({
      identifier: t.String(),
      password: t.String(),
    }),
  });
