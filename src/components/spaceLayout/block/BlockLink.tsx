import styled from "styled-components";

interface BlockLinkProps {
  link?: string;
}

export default function BlockLink({ link }: BlockLinkProps) {
  return <LinkBox disabled placeholder="URL을 입력해주세요"></LinkBox>;
}
const LinkBox = styled.input`
  width: 218px;
  height: 22px;
  color: #b3b3b3;
  padding-left: 5px;
  border-radius: 5px;
  background: #ededed;
  ${({ theme }) => `${theme.text.text1.medium}`}
`;
