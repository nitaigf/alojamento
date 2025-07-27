// apps/frontend/src/routes/layout.tsx
import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-1 p-4">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
