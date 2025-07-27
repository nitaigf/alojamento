// features/users/components/UserForm.tsx
import { component$, useSignal, $ } from "@builder.io/qwik";
import { createUser } from "~/features/users/services/user.service";
import { useNavigate } from "@builder.io/qwik-city";

export const UserForm = component$(() => {
  const name = useSignal("");
  const email = useSignal("");
  const password = useSignal("");
  const nav = useNavigate();

  const handleCreate = $(
    async () => {
      try {
        await createUser({ name: name.value, email: email.value, password: password.value });
        nav("/login");
      } catch (err) {
        alert("Erro ao criar usuário");
        console.error("User creation failed:", err);
      }
    }
  );

  return (
    <div class="flex flex-col gap-2">
      <input placeholder="Nome" bind:value={name} class="p-2 border rounded" />
      <input placeholder="Email" bind:value={email} class="p-2 border rounded" />
      <input type="password" placeholder="Senha" bind:value={password} class="p-2 border rounded" />
      <button onClick$={handleCreate} class="bg-green-600 text-white p-2 rounded">Cadastrar</button>
    </div>
  );
});