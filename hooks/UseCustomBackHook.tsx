import { useEffect } from "react";
import useModal from "./UseModalHook";

const useCustomBack = (customBack: () => void) => {
  const { isOpen, onCloseModal } = useModal();

  useEffect(() => {
    const handlePopstate = (e: PopStateEvent) => {
      e.preventDefault(); // 기본 동작 방지

      if (isOpen) {
        onCloseModal();
      } else {
        customBack();
      }
    };

    if (isOpen) {
      history.pushState(null, "", location.href);
    }

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [customBack, isOpen, onCloseModal]);
};

export default useCustomBack;
