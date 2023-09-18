"use client";

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
  );
};

const MainBlock = styled.div`
  height: 100vh;
`;

const HeaderMargin = styled.div`
  margin-top: 58px;
`;

export default Home;
