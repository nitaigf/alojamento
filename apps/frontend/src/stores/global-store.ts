// src/stores/global-store.ts
let globalUser: any = null; // <- só aqui

export const getCurrentUser = () => globalUser;

export const setGlobalUser = (user: any) => {
  globalUser = user;
  if (typeof window !== 'undefined') {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const clearGlobalUser = () => {
  globalUser = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem("user");
  }
};

export const initUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        globalUser = JSON.parse(stored);
      } catch (err) {
        console.error('Erro ao parsear usuário:', err);
        localStorage.removeItem("user");
        globalUser = null;
      }
    }
  }
};
