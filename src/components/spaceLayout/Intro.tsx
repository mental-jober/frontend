import styled from "styled-components";
import IntroBackGround from "./intro/IntroBackGround";
import IntroProfileImg from "./intro/IntroProfileImg";
import IntroText from "./intro/IntroText";

interface IntroProps {
  type: string;
}

export default function Intro({ type }: IntroProps) {
  return (
    <Div>
      <IntroBackGround />
      {renderIntro(type)}
    </Div>
  );
}

const renderIntro = (type: string) => {
  switch (type) {
    case "profile":
      return (
        <>
          <IntroProfileImg />
          <IntroText />
        </>
      );
    case "project":
  }
};
const Div = styled.div`
  background-color: aliceblue;
`;
