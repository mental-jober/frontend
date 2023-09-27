// Zustand store - user.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id?: number;
  email?: string;
  username?: string;  // 추가된 항목
  accessToken?: string;  // 추가된 항목
};

type UserState = {
  user: User;
  setUser: (user: User) => void;
  setToken: (token: string) => void;  // 추가된 함수
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
      setToken: (token: string) =>  // 토큰을 저장하는 새로운 함수
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
