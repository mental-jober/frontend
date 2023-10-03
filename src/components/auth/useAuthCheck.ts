"use client";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteAccessTokenCookie, getAccessTokenCookie } from "@/lib/cookies";
import { tokenCheck } from "@/lib/api/tokenCheckAPI";

const useAuthCheck = (redirectUrl: string = "/auth/login") => {
  const router = useRouter();
  const accessToken = getAccessTokenCookie(); // Zustand store에서 accessToken 가져오기

  const crossCheckToken = useCallback(async () => {
    try {
      const response = await tokenCheck();

      if (response !== true || !response) {
        deleteAccessTokenCookie();
        router.refresh();
      }
    } catch (error) {
      console.error("토큰 확인 에러:", error);
    }
  }, [router]);

  useEffect(() => {
    crossCheckToken();

    if (!accessToken) {
      router.replace(redirectUrl); // accessToken이 없으면 redirectUrl로 리다이렉트
      return;
    }
  }, [accessToken, router, redirectUrl, crossCheckToken]);
};

export default useAuthCheck;
