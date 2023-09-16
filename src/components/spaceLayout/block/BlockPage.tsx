import styled from "styled-components";

interface BlockPageProps {}

export default function BlockPage() {
  return <PageBox>자버의 자회사 룰루</PageBox>;
}
const PageBox = styled.div`
  font-size: 16px;
  color: #3b3b3b;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
`;
