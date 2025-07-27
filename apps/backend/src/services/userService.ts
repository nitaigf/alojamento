// apps/backend/src/services/userService.ts
import { getDb } from "../database/mongo";
import { CreateUserSchema } from "../validators/userSchema";
import { hash } from "bun";
import { parse } from "valibot";
import type { User } from "../models/userModel";

export async function createUserService(input: unknown): Promise<string> {
  const parsed = parse(CreateUserSchema, input);

  const db = getDb();
  const existingUser = await db.collection<User>("users").findOne({ email: parsed.email });

  if (existingUser) {
    throw new Error("Email já cadastrado");
  }

  const passwordHash = await Bun.password.hash(parsed.password);

  const result = await db.collection<User>("users").insertOne({
    name: parsed.name,
    email: parsed.email,
    passwordHash,
  });

  return result.insertedId.toString();
}

export async function listUsersService(): Promise<Omit<User, "passwordHash">[]> {
  const db = getDb();

  const users = await db
    .collection<User>("users")
    .find({}, { projection: { passwordHash: 0 } })
    .toArray();

  return users;
}
