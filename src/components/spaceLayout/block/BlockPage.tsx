import styled from "styled-components";

interface BlockPageProps {
  content: string;
}

const BlockPage = ({ content }: BlockPageProps) => {
  return <PageBox>{content ? content : "새 페이지"}</PageBox>;
};

const PageBox = styled.div`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;

export default BlockPage;
