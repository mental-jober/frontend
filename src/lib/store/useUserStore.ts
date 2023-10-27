import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  id: number;
  email: string;
  username: string;
};

type UserState = {
  user: Record<string, string | number>;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
     (set) => ({
      user: {},
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: {} }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
