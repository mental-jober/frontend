import { forwardRef } from "react";
import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";
import styled from "styled-components";
import HistoryEditNow from "./HistoryEditNow";
import { useSelectedHistory } from "@/lib/store/useSelectedHistory";

interface HistoryHeaderProps {
  $isOpen: boolean;
  onClick: () => void;
}

const HistoryHeader = forwardRef<HTMLDivElement | null, HistoryHeaderProps>(
  function Header(props, ref) {
    const { historyData } = useSelectedHistory();

    return (
      <Wrapper ref={ref} {...props}>
        {props.$isOpen ? <StyledUpArrow /> : <StyledDownArrow />}
        <Contents>
          <Time>{historyData.date}</Time>
          {/* 추후 받아온 데이터의 인덱스가 0인경우와 아닌경우의 로직 추가 */}
          <HistoryEditNow />
        </Contents>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  gap: 10px;
  height: 58px;
  display: flex;
  cursor: pointer;
  min-width: 360px;
  max-width: 430px;
  padding: 15px 20px;
  align-items: center;
  justify-content: space-between;
`;

const StyledUpArrow = styled(PiCaretUpFill)`
  width: 20px;
  height: 20px;
  ${({ theme }) => theme.textColor.blue[300]};
`;

const StyledDownArrow = styled(PiCaretDownFill)`
  width: 20px;
  height: 20px;
  ${({ theme }) => theme.textColor.blue[300]};
`;

const Contents = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.span`
  ${({ theme }) => theme.text.title4.bold};
`;

export default HistoryHeader;
