// features/auth/components/LoginForm.tsx
import { component$, useSignal, $ } from "@builder.io/qwik";
import { login } from "~/features/auth/services/auth.service";
import { useAuth } from "~/stores/auth";
import { useNavigate } from "@builder.io/qwik-city";

export const LoginForm = component$(() => {
  const identifier = useSignal("");
  const password = useSignal("");
  const nav = useNavigate();
  
  const { setUser } = useAuth();

  const handleLogin = $(
    async () => {
      try {
        const data = await login(identifier.value, password.value);
        setUser(data.user);
        nav("/users");
      } catch (err) {
        alert("Credenciais inválidas");
        console.error("Login failed:", err);
      }
    }
  );

  return (
    <div class="flex flex-col gap-2">
      <input placeholder="Email ou usuário" bind:value={identifier} class="p-2 border rounded" />
      <input type="password" placeholder="Senha" bind:value={password} class="p-2 border rounded" />
      <button onClick$={handleLogin} class="bg-blue-600 text-white p-2 rounded">Entrar</button>
    </div>
  );
});