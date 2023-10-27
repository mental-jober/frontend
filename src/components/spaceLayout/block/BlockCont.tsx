import styled from "styled-components";

interface BlockTextProps {
  content: string;
}

const BlockText = ({ content }: BlockTextProps) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const extractedText = doc.querySelector("p")?.textContent;

  return <TextBox>{content ? extractedText : "내용을 입력해주세요"}</TextBox>;
};

const TextBox = styled.span`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;

export default BlockText;
