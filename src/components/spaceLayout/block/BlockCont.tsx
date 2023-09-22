import styled from "styled-components";

interface BlockContProps {
  //일단 데이터 전달 방식이 정해지지 않았으므로 옵셔널
  text?: string;
}

export default function BlockCont({ text }: BlockContProps) {
  return <TextBox>이름을 입력해주세요.</TextBox>;
}

const TextBox = styled.span`
  ${({ theme }) => `${theme.text.title4.bold} ${theme.textColor.gray[950]}`}
`;
