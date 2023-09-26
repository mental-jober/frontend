import styled from "styled-components";
import { PiTrash } from "react-icons/pi";
import Chip from "../Chip";
import ToggleSwitch from "@/components/common/ToggleSwitch";
import { useState } from "react";
import { BlockData } from "../SpaceProject";

interface BlockBottomProps {
  data: BlockData;
}

export default function BlockBottom({ data }: BlockBottomProps) {
  const [isHidden, setIsHidden] = useState<boolean>(data.hidden);

  return (
    <Bottom>
      <Chip name={data.name} />
      <BotRight>
        <StyledTrashIcon onClick={() => {}} />
        <ToggleSwitch
          checked={!isHidden}
          onChange={() => {
            console.log(data.id, isHidden);
            setIsHidden((prev) => !prev);
          }}
        />
      </BotRight>
    </Bottom>
  );
}
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
