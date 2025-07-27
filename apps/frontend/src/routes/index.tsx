// routes/index.tsx
import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  return (
    <div class="flex justify-center items-center h-screen">
      <button onClick$={() => nav("/login")} class="bg-blue-600 text-white p-4 rounded">
        Entrar no sistema
      </button>
    </div>
  );
});