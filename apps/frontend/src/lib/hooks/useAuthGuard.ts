// src/lib/hooks/useAuthGuard.ts
import { useNavigate } from "@builder.io/qwik-city";
import { useVisibleTask$ } from "@builder.io/qwik";
import { getCurrentUser } from "~/stores/auth";

export const useAuthGuard = () => {
  const nav = useNavigate();

  useVisibleTask$(() => {
    const user = getCurrentUser();
    if (!user) {
      nav("/login");
    }
  });
};