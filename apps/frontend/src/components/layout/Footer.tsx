// apps/frontend/src/components/layout/Footer.tsx
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="bg-gray-100 text-center text-sm p-4">
      © {new Date().getFullYear()} Nitai Systems – Todos os direitos reservados.
    </footer>
  );
});
