import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id?: number;
  email?: string;
  username?: string; 
  accessToken?: string;  
};

type UserState = {
  user: User;
  setUser: (user: User) => void;
  setToken: (token: string) => void;  
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {},
      setUser: (user: User) => 
        set((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
            ...user,
          },
        })),
      setToken: (token: string) => 
        set((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
            accessToken: token,
          },
        })),
      clearUser: () => 
        set(() => ({
          user: {}
        })),
    }),
    {
      name: "userInfo",  // local storage에 저장될 key
    }
  )
);

