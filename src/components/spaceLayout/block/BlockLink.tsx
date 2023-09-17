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
  font-size: 16px;
  font-weight: 500;
  color: #b3b3b3;
  padding-left: 5px;
  font-style: normal;
  border-radius: 5px;
  line-height: normal;
  background: #ededed;
  letter-spacing: -0.32px;
`;
