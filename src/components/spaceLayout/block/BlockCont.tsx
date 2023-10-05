import styled from "styled-components";

interface BlockTextProps {
  content: string;
}

const BlockText = ({ content }: BlockTextProps) => {
  return <TextBox>{content ? content : "내용을 입력해주세요"}</TextBox>;
};

const TextBox = styled.span`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;

export default BlockText;
