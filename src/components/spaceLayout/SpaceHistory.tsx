import { useEffect, useRef, useState } from "react";
import HistoryHeader from "./history/HistoryHeader";
import HistoryLists from "./history/HistoryLists";

const SpaceHistory = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const historyRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        historyRef.current &&
        !historyRef.current.contains(e.target as Node | null) &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node | null) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <HistoryHeader
        $isOpen={isOpen}
        ref={headerRef}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {isOpen ? <HistoryLists ref={historyRef} setIsOpen={setIsOpen} /> : null}
    </>
  );
};

export default SpaceHistory;
