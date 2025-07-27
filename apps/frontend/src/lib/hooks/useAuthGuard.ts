// src/lib/hooks/useAuthGuard.ts
import { useNavigate } from "@builder.io/qwik-city";
import { useVisibleTask$ } from "@builder.io/qwik";
import { initUserFromStorage, getCurrentUser } from "~/stores/global-store";

export const useAuthGuard = () => {
  const nav = useNavigate();

  useVisibleTask$(() => {
    initUserFromStorage(); // <-- garante que o user esteja carregado
    const user = getCurrentUser();
    if (!user) {
      nav("/login");
    }
  });
};
