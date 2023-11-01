import { styled } from "styled-components";
import Button from "../common/Button";
import { PiHeart, PiHeartFill } from "react-icons/pi";
// import { MdOutlineSearch } from "react-icons/md";
import { memo, useCallback, useState } from "react";
import { Data } from "@/app/template/page";
import { postFavorite, removeFavorite } from "@/lib/api/templateAPI";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { useRouter } from "next/navigation";
import useCompnetTempIdStore from "@/lib/store/useComponentTempIdStore";
import { componentsSave } from "@/lib/api/componentsAPI";

const TemplateItem = ({ title, description, hashtags, id }: Data) => {
  // State
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const { componentTempId } = useCompnetTempIdStore();
  const { spaceWallId } = useSpaceWallStore();

  // Function
  const onClick = useCallback(async () => {
    if (toggle === false) {
      await postFavorite(id).then((res) => {
        console.log(res.message);
        console.log(res.code);
      });
    } else {
      await removeFavorite().then((res) => {
        console.log(res.message);
      });
    }
    setToggle((toggle) => !toggle);
  }, [id, toggle]);

  const onApplyTemplate = () => {
    componentsSave(spaceWallId as number, {
      componentTempId: componentTempId as number,
      templateId: id,
    });
    router.push(`/space/${spaceWallId}/edit`);
  };

  // Render
  return (
    <TemplateItemBlock>
      <ContentWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        <HashTag>
          <span>#{hashtags[0]}</span>
          {hashtags[1] ? <span>#{hashtags[1]}</span> : null}
        </HashTag>
      </ContentWrapper>
      <ButtonWrapper>
        <HeartButton onClick={onClick}>
          {toggle ? <HeartFill /> : <Heart />}
        </HeartButton>
        <Button $templatebtn onClick={onApplyTemplate}>
          {/* <MdOutlineSearch /> */}
          적용하기
        </Button>
      </ButtonWrapper>
    </TemplateItemBlock>
  );
};

// Style
const TemplateItemBlock = styled.li`
  width: 100%;
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
    width: 220px;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    width: 220px;
    font-size: 14px;
    color: #747e8a;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: pre-wrap;
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
  filter: drop-shadow(0 0 2px red);
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

export default memo(TemplateItem);
