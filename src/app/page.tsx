"use client";

import HomeLayout from '@/components/home/HomeLayout';
// import ToastUi from "@/components/toast/ToastUi";
// import { useToastStore } from "@/lib/store/store.module";

const Home = () => {
  // const { showToast } = useToastStore();

  return (
    <>
    <HomeLayout />
      {/* <div>
        <button onClick={() => showToast("저장 중~~")}>클릭</button>
      </div>
      <ToastUi /> */}
    </>
  );
};

export default Home;
