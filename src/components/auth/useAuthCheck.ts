"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessTokenCookie } from '@/lib/cookies';

const useAuthCheck = (redirectUrl: string = "/auth/login") => {
  const router = useRouter();
  const accessToken = getAccessTokenCookie(); // Zustand store에서 accessToken 가져오기

  useEffect(() => {
    if (!accessToken) {
      router.replace(redirectUrl); // accessToken이 없으면 redirectUrl로 리다이렉트
    }
  }, [accessToken, router, redirectUrl]);
};

export default useAuthCheck;
