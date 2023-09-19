"use client";

import ToastUi from "@/components/toast/ToastUi";
import { useToastStore } from "@/lib/store/store.module";

const Home = () => {
  const { showToast } = useToastStore();

  return (
    <>
      <div>
        <button onClick={() => showToast("저장 중~~")}>클릭</button>
      </div>
      <ToastUi />
    </>
  );
};

const MainBlock = styled.div`
  height: 100vh;
`;

const HeaderMargin = styled.div`
  margin-top: 58px;
`;

export default Home;
