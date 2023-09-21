import { styled } from "styled-components";
import Button from "../common/Button";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";

const TemplateItem = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <TemplateItemBlock>
      <ContentWrapper>
        <h2>제목</h2>
        {/* Todo: p태그 자동 줄바꿈 문제 */}
        <p>
          여기는 설명이 들어가는 곳입니다. <br />
          최대 두줄까지 들어갈 수 있습니다.
        </p>
        <HashTag>
          <span>#사내공문</span>
          <span>#공지사항</span>
        </HashTag>
      </ContentWrapper>
      <ButtonWrapper>
        <HeartButton onClick={onClick}>
          {toggle ? <HeartFill /> : <Heart />}
        </HeartButton>
        <Button $templatebtn>
          <MdOutlineSearch />
          미리보기
        </Button>
      </ButtonWrapper>
    </TemplateItemBlock>
  );
};

const TemplateItemBlock = styled.li`
  width: 100%;
  max-width: 360px;
  height: 160px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #747e8a;
    font-weight: 500;
  }
`;

const HashTag = styled.div`
  display: flex;
  gap: 4px;
  span {
    font-size: 12px;
    border-radius: 6px;
    background: ${({ theme }) => theme.color.gray[2]};
    color: ${({ theme }) => theme.color.blue[3]};
    padding: 4px;
  }
`;

const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

const HeartButton = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Heart = styled(PiHeart)`
  color: #707070;
  animation: inactiveHeart 0.3s normal;
  @keyframes inactiveHeart {
    0% {
      transform: none;
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: none;
    }
  }
`;

const HeartFill = styled(PiHeartFill)`
  color: red;
  animation: activeHeart 0.3s normal;
  @keyframes activeHeart {
    0% {
      transform: none;
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: none;
    }
  }
`;

export default TemplateItem;
