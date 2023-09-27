import { create } from "zustand";

interface useSelectedHistoryProps {
  historyData: HistoryProps;
  setHistoryData: (newData: HistoryProps) => void;
}

type HistoryProps = {
  date: string;
  id: number;
};
// 초기 데이터는 추후 API로 불러오기
const initialData: HistoryProps = { date: "7월 25일 오전 12:53", id: 0 };

const useSelectedHistoryStore = create<useSelectedHistoryProps>((set) => ({
  historyData: initialData,
  setHistoryData: (newData) => set({ historyData: newData }),
}));

export default useSelectedHistoryStore;
