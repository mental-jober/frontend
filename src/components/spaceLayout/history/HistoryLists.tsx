import { Dispatch, SetStateAction, forwardRef } from "react";
import styled from "styled-components";
import HistoryEditNow from "./HistoryEditNow";
import HistorySaved from "./HistorySaved";
import { useSelectedHistory } from "@/lib/store/useSelectedHistory";

type HistoryProps = {
  date: string;
  id: number;
};

interface HistoryListsProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// 임시 데이터
// 현재 작업중인 데이터 정보를 임시저장 api에서 받아오기
const historys: HistoryProps[] = [
  { date: "7월 25일 오전 12:53", id: 0 },
  { date: "7월 21일 오전 8:01", id: 1 },
  { date: "7월 20일 오후 12:53", id: 2 },
  { date: "7월 18일 오후 12:51", id: 3 },
  { date: "7월 02일 오후 12:21", id: 4 },
  { date: "7월 02일 오후 11:53", id: 5 },
];

const HistoryLists = forwardRef<HTMLUListElement | null, HistoryListsProps>(
  function Lists(props, ref) {
    const { setHistoryData } = useSelectedHistory();
    return (
      <Wrapper ref={ref}>
        {historys.map((history, idx) => (
          <List
            key={history.id}
            onClick={() => {
              setHistoryData(history);
              props.setIsOpen(false);
            }}
          >
            <Time>{history.date}</Time>
            {idx ? <HistorySaved /> : <HistoryEditNow />}
          </List>
        ))}
      </Wrapper>
    );
  },
);

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  width: 360px;
  height: 58px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 15px 20px 15px 50px;
  justify-content: space-between;

  &:hover {
    background-color: #2593fc;

    span {
      color: #fff;
    }

    div > div {
      background-color: #fff;
    }
  }
`;

const Time = styled.span`
  color: #000;
  ${({ theme }) => theme.text.title4.medium};
`;

export default HistoryLists;
