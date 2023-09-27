"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/useUserStore";

const useAuthCheck = (redirectUrl: string = "/auth/login") => {
  const router = useRouter();
  const accessToken = useUserStore((state) => state.user.accessToken); // Zustand store에서 accessToken 가져오기

  useEffect(() => {
    if (!accessToken) {
      router.replace(redirectUrl); // accessToken이 없으면 redirectUrl로 리다이렉트
    }
  }, [accessToken, router, redirectUrl]);
};

export default useAuthCheck;
