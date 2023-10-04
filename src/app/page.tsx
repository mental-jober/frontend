"use client";

import useAuthCheck from "@/components/auth/useAuthCheck";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import HomeLayout from "@/components/home/HomeLayout";

const Home = () => {
  const isAuthenticated = useAuthCheck();

  if (isAuthenticated === null) {
    // 인증 상태 확인 중
    return <LoadingSpinner />;
  }

  return <>{isAuthenticated ? <HomeLayout /> : null}</>;
};

export default Home;
