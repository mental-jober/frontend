"use client";

import styled from "styled-components";
import { PiTrash } from "react-icons/pi";
import Chip from "../Chip";
import ToggleSwitch from "@/components/common/ToggleSwitch";
import { useState } from "react";
import { ComponentData } from "@/lib/store/useComponentStore";

interface BlockBottomProps {
  data: ComponentData;
}

const BlockBottom = ({ data }: BlockBottomProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(data.visible);

  return (
    <Bottom>
      <Chip name={data.type} />
      <BotRight>
        <StyledTrashIcon onClick={() => {}} />
        <ToggleSwitch
          checked={!isHidden}
          onChange={() => {
            console.log(data.componentTempId, isHidden);
            setIsHidden((prev) => !prev);
          }}
        />
      </BotRight>
    </Bottom>
  );
};
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BotRight = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;

const StyledTrashIcon = styled(PiTrash)`
  color: #b5b5b5;
`;

export default BlockBottom;
