// src/stores/auth.ts
import { useSignal, $ } from "@builder.io/qwik";

// Store global simples para o usuário
let globalUser: any = null;

// Função para obter o usuário atual
export const getCurrentUser = () => globalUser;

// Função para inicializar o usuário do localStorage
export const initUser = $(() => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        globalUser = JSON.parse(stored);
      } catch (error) {
        console.error('Erro ao parsear usuário:', error);
        localStorage.removeItem("user");
        globalUser = null;
      }
    }
  }
});

// Função para setar o usuário
export const setUser = $((user: any) => {
  globalUser = user;
  if (typeof window !== 'undefined') {
    localStorage.setItem("user", JSON.stringify(user));
  }
});

// Função para limpar o usuário
export const clearUser = $(() => {
  globalUser = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem("user");
  }
});

// Hook para usar autenticação
export const useAuth = () => {
  const userSignal = useSignal<any | null>(globalUser);

  // Sincronizar o signal com o estado global
  if (globalUser) {
    userSignal.value = globalUser;
  }

  return {
    user: userSignal,
    setUser: $((user: any) => {
      globalUser = user;
      userSignal.value = user;
      if (typeof window !== 'undefined') {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }),
    clearUser: $(() => {
      globalUser = null;
      userSignal.value = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem("user");
      }
    }),
    initUser: $(() => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem("user");
        if (stored) {
          try {
            const user = JSON.parse(stored);
            globalUser = user;
            userSignal.value = user;
          } catch (error) {
            console.error('Erro ao parsear usuário:', error);
            localStorage.removeItem("user");
            globalUser = null;
            userSignal.value = null;
          }
        }
      }
    }),
  };
};

// Para compatibilidade com código existente
export const userSignal = {
  get value() {
    return globalUser;
  },
  set value(newValue: any) {
    globalUser = newValue;
  }
};