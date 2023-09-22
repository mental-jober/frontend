import styled from "styled-components";
import Plates from "./Plates";
import Block from "./Block";
import IntroProfile from "./IntroProfile";

// page로 이동 예정
export default function SpaceProfile() {
  return (
    <Container>
      <IntroProfile />
      <Plates />
    </Container>
  );
}

const Container = styled.div`
  gap: 10px;
  width: 360px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f8fb;
`;
