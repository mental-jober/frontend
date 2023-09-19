import styled from "styled-components";

export default function IntroProfileText() {
  return (
    <TextAreaBox>
      <Title>제목 영역</Title>
      <Text>
        자기소개 영역 자기소개 영역 자기소개 영역 자기소개 영역 자기소개 영역
        자기소개 영역
      </Text>
    </TextAreaBox>
  );
}
const TextAreaBox = styled.div`
  gap: 20px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  ${({ theme }) => `${theme.text.title2.bold} ${theme.textColor.gray[950]}`}
`;

const Text = styled.span`
  text-align: center;
  ${({ theme }) => `${theme.text.text2.medium} ${theme.textColor.gray[700]}`}
`;
