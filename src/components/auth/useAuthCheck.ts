// "use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAccessTokenCookie } from "@/lib/cookies";
import { checkTokenApi } from "@/lib/api/api";

const useAuthCheck = (redirectUrl: string = "/auth/login") => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const accessToken = getAccessTokenCookie();

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
