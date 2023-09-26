import styled from "styled-components";
import IntroBackGround from "./intro/IntroBackGround";
import IntroProjectText from "./intro/IntroProjectText";

const IntroProject = () => {
  return (
    <Wrapper>
      <IntroBackGround />
      <IntroProjectText />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export default IntroProject;
