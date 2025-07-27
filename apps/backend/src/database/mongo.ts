// apps/backend/src/database/mongo.ts
import { MongoClient, Db } from "mongodb";
import { env } from "../config";

let client: MongoClient;
let db: Db;

export const connectToDatabase = async (): Promise<Db> => {
  if (!client) {
    client = new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.dbName);
    console.log("🧩 Conectado ao MongoDB:", env.dbName);
  }
  return db;
};

export const getDb = (): Db => {
  if (!db) {
    throw new Error("Banco de dados não conectado. Chame connectToDatabase() primeiro.");
  }
  return db;
};
