import styled from "styled-components";

interface BlockTempProps {}

export default function BlockTemp() {
  return <TempBox>자버의 사용성 설문조사</TempBox>;
}
const TempBox = styled.div`
  color: #3b3b3b;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
`;
