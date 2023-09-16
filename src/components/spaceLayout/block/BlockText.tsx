import styled from "styled-components";

interface BlockTextProps {
  //일단 데이터 전달 방식이 정해지지 않았으므로 옵셔널
  text?: string;
}

export default function BlockText({ text }: BlockTextProps) {
  return <TextBox>이름을 입력해주세요.</TextBox>;
}

const TextBox = styled.span`
  font-size: 16px;
  color: #3b3b3b;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
`;
