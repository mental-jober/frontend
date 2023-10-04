import { create } from "zustand";

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

export const useUserStore = create<UserState>((set) => ({
  user: {},
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: {} }),
}));
