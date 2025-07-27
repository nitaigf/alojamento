// apps/backend/src/validators/userSchema.ts
import { object, string, email, minLength } from "valibot";

export const CreateUserSchema = object({
  name: string(),
  email: email(),
  password: minLength(6),
});
