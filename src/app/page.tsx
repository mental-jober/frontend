"use client";
import useAuthCheck from "@/components/auth/useAuthCheck";
import HomeLayout from "@/components/home/HomeLayout";

const Home = () => {
  useAuthCheck();
  return (
    <>
      <HomeLayout />
    </>
  );
};

export default Home;
