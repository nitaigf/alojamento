// features/users/services/user.service.ts
import { getCurrentUser } from "~/stores/auth";

export async function createUser(user: { name: string; email: string; password: string }) {
  const currentUser = getCurrentUser();
  
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      ...(currentUser?.token && { "Authorization": `Bearer ${currentUser.token}` })
    },
    body: JSON.stringify(user)
  });

  if (!res.ok) throw new Error("Erro ao criar usuário");

  return await res.json();
}

export async function listUsers() {
  const currentUser = getCurrentUser();
  
  const res = await fetch("http://localhost:3000/users", {
    headers: {
      "Content-Type": "application/json",
      ...(currentUser?.token && { "Authorization": `Bearer ${currentUser.token}` })
    }
  });

  if (!res.ok) throw new Error("Erro ao buscar usuários");
  
  const data = await res.json();
  
  // Garantir que sempre retornamos um array
  return Array.isArray(data) ? data : [];
}