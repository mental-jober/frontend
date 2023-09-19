"use client";

<<<<<<< HEAD
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
=======
import Header from "@/components/common/Header";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import IntroProjectText from "@/components/spaceLayout/intro/IntroProjectText";
import { styled } from "styled-components";

const Home = () => {
  return (
    <MainBlock>
      <Header />
      <HeaderMargin />
      <IntroProfile />
      <IntroProjectText />
    </MainBlock>
>>>>>>> 19431c3235c71f85934090b2e1986966c93fc63f
  );
};

const MainBlock = styled.div`
  height: 100vh;
`;

const HeaderMargin = styled.div`
  margin-top: 58px;
`;

export default Home;
