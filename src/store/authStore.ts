import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockUser } from "../mocks/auth";

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      login: async (email, password) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (email === mockUser.email && password === mockUser.password) {
          set({
            token: "fake_token",
            isAuthenticated: true,
          });
        } else {
          throw new Error("Credenciais inválidas!");
        }
      },
      logout: () => {
        set({
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
