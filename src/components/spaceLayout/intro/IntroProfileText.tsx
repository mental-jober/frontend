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
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #747e8a;
  text-align: center;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;
