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
        deleteAccessTokenCookie();
        router.refresh();
      }
    } catch (error) {
      console.error("토큰 확인 에러:", error);
    }
  }, [router]);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!accessToken) {
        setIsAuthenticated(false);
        router.replace(redirectUrl);
      } else {
        try {
          const res = await checkTokenApi();
          console.log("CHECK-TOKEN ", res);
          if (res === true || res.status === 200) {
            console.log("res === true : 확인");
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            router.replace(redirectUrl);
          }
        } catch (e) {
          console.error(e);
          setIsAuthenticated(false);
          router.replace(redirectUrl);
        }
      }
    };

    checkAuthentication();
  }, [accessToken, router, redirectUrl]);

  return isAuthenticated;
};

export default useAuthCheck;
