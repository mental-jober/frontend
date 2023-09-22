import { useEffect, useRef, useState } from "react";
import HistoryHeader from "./history/HistoryHeader";
import HistoryLists from "./history/HistoryLists";

const SpaceHistory = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const historyRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        historyRef.current &&
        !historyRef.current.contains(e.target as Node | null) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <HistoryHeader
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen ? <HistoryLists ref={historyRef} /> : null}
    </>
  );
};

export default SpaceHistory;
