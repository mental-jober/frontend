import useSpaceStore from "@/lib/store/useSpaceStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { useUserStore } from "@/lib/store/useUserStore";
import styled from "styled-components";

const IntroProfileText = () => {
  const { getValue } = useSpaceStore();
  const { spaceWallId } = useSpaceWallStore();
  const { user } = useUserStore();

  const defaultTitle = `${user.username}의 공유스페이스`;
  const defaultText = "내용을 입력해주세요.";

  return (
    <TextAreaBox>
      <Title>{getValue(spaceWallId as number, "title") || defaultTitle}</Title>
      <Text>
        {getValue(spaceWallId as number, "description") || defaultText}
      </Text>
    </TextAreaBox>
  );
};
const TextAreaBox = styled.div`
  gap: 20px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.span`
  ${({ theme }) => `${theme.text.title2.bold} ${theme.textColor.gray[950]}`}
  padding: 5px;
`;

const Text = styled.span`
  text-align: center;
  ${({ theme }) => `${theme.text.text2.medium} ${theme.textColor.gray[700]}`}
  padding: 5px;
`;

export default IntroProfileText;
