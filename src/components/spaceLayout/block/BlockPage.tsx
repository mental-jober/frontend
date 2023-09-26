import styled from "styled-components";

// interface BlockPageProps {} //중간 배포 중에 interface에 타입 지정이 안되있어서 주석처리

const BlockPage = () => {
  return <PageBox>자버의 자회사 룰루</PageBox>;
};

const PageBox = styled.div`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;

export default BlockPage;
