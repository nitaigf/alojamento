// routes/cadastro/index.tsx
import { component$ } from "@builder.io/qwik";
import { UserForm } from "~/features/users/components/UserForm";

export default component$(() => {
  return (
    <div class="max-w-md mx-auto mt-20">
      <h1 class="text-2xl font-bold mb-4">Cadastro de Usuário</h1>
      <UserForm />
    </div>
  );
});