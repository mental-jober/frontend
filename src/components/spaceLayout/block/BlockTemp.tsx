import styled from "styled-components";

/* interface BlockTempProps {} */

export default function BlockTemp() {
  return <TempBox>자버의 사용성 설문조사</TempBox>;
}
const TempBox = styled.div`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;
