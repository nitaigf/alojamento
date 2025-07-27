// src/stores/auth.ts
import { $, useSignal } from "@builder.io/qwik";
import {
  setGlobalUser,
  clearGlobalUser,
  initUserFromStorage,
  getCurrentUser,
} from "./global-store";

export const useAuth = () => {
  const userSignal = useSignal<any | null>(getCurrentUser());

  const setUser = $((user: any) => {
    setGlobalUser(user);
    userSignal.value = user;
  });

  const clearUser = $(() => {
    clearGlobalUser();
    userSignal.value = null;
  });

  const initUser = $(() => {
    initUserFromStorage();
    userSignal.value = getCurrentUser();
  });

  return {
    user: userSignal,
    setUser,
    clearUser,
    initUser,
  };
};
