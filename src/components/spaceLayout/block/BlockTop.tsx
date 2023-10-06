"use client";

import styled from "styled-components";
import { PiDotsSixVertical, PiCaretRight } from "react-icons/pi";
import BlockCont from "./BlockCont";
import BlockTemp from "./BlockTemp";
import BlockPage from "./BlockPage";
import BlockLink from "./BlockLink";
import { ComponentData } from "@/lib/store/useComponentStore";
import { useRouter } from "next/navigation";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { useModal } from "../../../../hooks/UseModalHook";
import AddLinkModal from "@/components/modal/AddLinkModal";
import useComponentTempIdStore from "@/lib/store/useComponentTempIdStore";

interface BlockTopProps {
  data: ComponentData;
}

const BlockTop = ({ data }: BlockTopProps) => {
  const router = useRouter();
  const { spaceWallId } = useSpaceWallStore();
  const { onOpenModal } = useModal();
  const { setComponentTempId } = useComponentTempIdStore();

  const onClick = () => {
    if (data.type === "cont") {
      router.push(
        `/space/${spaceWallId}/edit/${data.componentTempId}/textEdit`,
      );
    } else if (data.type === "link") {
      setComponentTempId(data.componentTempId);
      onOpenModal("AddLink");
    }
  };
  return (
    <>
      <Top onClick={() => onClick()}>
        <StyledDragDots />
        <ContentArea>{renderBlockContent({ data })}</ContentArea>
        <StyledArrow />
      </Top>
      <AddLinkModal />
    </>
  );
};

const renderBlockContent = ({ data }: BlockTopProps) => {
  switch (data.type) {
    case "cont":
      return <BlockCont content={data.content} />;
    case "temp":
      return <BlockTemp content={data.content} />;
    case "line":
      return <Line />;
    case "page":
      return <BlockPage content={data.content} />;
    case "link":
      return <BlockLink content={data.content} />;
  }
};

const Top = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDragDots = styled(PiDotsSixVertical)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  ${({ theme }) => `${theme.textColor.gray[800]}`}
`;

const ContentArea = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StyledArrow = styled(PiCaretRight)`
  height: 18px;
  height: 18px;
  ${({ theme }) => `${theme.textColor.gray[800]}`}
`;

const Line = styled.div`
  height: 4px;
  width: 210px;
  background: #d9d9d9;
`;

export default BlockTop;
