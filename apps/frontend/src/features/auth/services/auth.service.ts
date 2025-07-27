// features/auth/services/auth.service.ts
export async function login(identifier: string, password: string) {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password })
  });

  if (!res.ok) throw new Error("Login inválido");

  return await res.json();
}