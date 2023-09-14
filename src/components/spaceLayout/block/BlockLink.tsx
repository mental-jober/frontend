import styled from "styled-components";

interface BlockLinkProps {
  link?: string;
}

export default function BlockLink({ link }: BlockLinkProps) {
  return <LinkBox disabled placeholder="URL을 입력해주세요"></LinkBox>;
}
const LinkBox = styled.input`
  background: #ededed;
  width: 218px;
  height: 22px;
`;
