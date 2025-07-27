// apps/backend/src/models/userModel.ts
export interface User {
  _id?: string;
  name: string;
  email: string;
  passwordHash: string;
}
