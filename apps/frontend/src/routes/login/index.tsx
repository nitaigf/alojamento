// routes/login/index.tsx
import { component$ } from "@builder.io/qwik";
import { LoginForm } from "~/features/auth/components/LoginForm";

export default component$(() => {
  return (
    <div class="max-w-md mx-auto mt-20">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  );
});