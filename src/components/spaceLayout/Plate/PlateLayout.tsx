import { createBlock } from "@/lib/api/spaceEditAPI";
import useComponentStore from "@/lib/store/useComponentStore";
import useSpaceWallStore from "@/lib/store/useSpaceWallStore";
import { ReactNode } from "react";
import styled from "styled-components";

interface PlateLayoutProps {
  children: ReactNode;
  name: string;
}

const PlateLayout = ({ children, name }: PlateLayoutProps) => {
  const { spaceWallId } = useSpaceWallStore();
  const { getSpaceComponents, setSpaceComponents } = useComponentStore();
  const onClickPlate = async (plate: string) => {
    if (spaceWallId) {
      const blockData = {
        parentSpaceWallTempId: 3, /// 원래는 spaceWallId를 넣어야함
        type: plate,
        sequence: Object.values(getSpaceComponents(spaceWallId)).length,
      };
      const { data } = await createBlock(blockData);
      setSpaceComponents(spaceWallId, data.componentTempId, data);
    }
  };
  return (
    <Wrapper
      onClick={() => {
        onClickPlate(name);
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 52px;
  gap: 1.842px;
  height: 54px;
  display: flex;
  padding: 9px 11px;
  align-items: center;
  flex-direction: column;
  border-radius: 15.659px;
  background-color: #fff;
`;
export default PlateLayout;
