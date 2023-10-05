import styled from "styled-components";

interface BlockTempProps {
  content: string;
}

const BlockTemp = ({ content }: BlockTempProps) => {
  return <TempBox>{content ? content : "템플릿을 선택해주세요"}</TempBox>;
};
const TempBox = styled.div`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;

export default BlockTemp;
