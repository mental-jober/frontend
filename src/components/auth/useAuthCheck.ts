// "use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteAccessTokenCookie, getAccessTokenCookie } from "@/lib/cookies";
import { tokenCheck } from "@/lib/api/tokenCheckAPI";

const useAuthCheck = (redirectUrl: string = "/auth/login") => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const accessToken = getAccessTokenCookie();

  const crossCheckToken = useCallback(async () => {
    try {
      const response = await tokenCheck();

      if (response !== true || !response) {
        setIsAuthenticated(false);
        deleteAccessTokenCookie();
        router.refresh();
      }
    } catch (error) {
      console.error("토큰 확인 에러:", error);
      setIsAuthenticated(false);
    }
    setIsAuthenticated(true);
  }, [router]);

  useEffect(() => {
    crossCheckToken();

    if (!accessToken) {
      router.replace(redirectUrl); // accessToken이 없으면 redirectUrl로 리다이렉트
      return;
    }
  }, [accessToken, router, redirectUrl, crossCheckToken]);

  return isAuthenticated;
};

export default useAuthCheck;
