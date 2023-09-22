import { forwardRef } from "react";
import styled from "styled-components";

type HistoryProps = {
  date: string;
  id: number;
};

// 임시 데이터
const historys: HistoryProps[] = [
  { date: "7월 25일 오전 12:53", id: 0 },
  { date: "7월 21일 오전 8:01", id: 1 },
  { date: "7월 20일 오후 12:53", id: 2 },
  { date: "7월 18일 오후 12:51", id: 3 },
  { date: "7월 02일 오후 12:21", id: 4 },
  { date: "7월 02일 오후 11:53", id: 5 },
];

const HistoryLists = forwardRef<HTMLUListElement | null>(
  function HistoryList(props, ref) {
    return (
      <Wrapper ref={ref} {...props}>
        {historys.map((history) => (
          <List key={history.id}>
            <Time>{history.date}</Time>
            <Status>저장됨</Status>
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
  align-items: center;
  padding: 15px 20px 15px 50px;
  justify-content: space-between;
`;

const Time = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const Status = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #9aa8b8;
  text-align: center;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export default HistoryLists;
