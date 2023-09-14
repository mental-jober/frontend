import styled from "styled-components";

interface BlockTempProps {}

export default function BlockTemp() {
  return <TempBox>자버의 사용성 설문조사</TempBox>;
}
const TempBox = styled.div`
  font-size: 13.971px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 20.957px */
  letter-spacing: -0.265px;
`;
