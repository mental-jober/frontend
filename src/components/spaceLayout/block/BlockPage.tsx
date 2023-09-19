import styled from "styled-components";

interface BlockPageProps {}

export default function BlockPage() {
  return <PageBox>자버의 자회사 룰루</PageBox>;
}
const PageBox = styled.div`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;
