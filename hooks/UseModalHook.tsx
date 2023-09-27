import { useState } from "react";

export interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    console.log("onOpenModal 호출됨");
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpenModal,
    onCloseModal,
  };
}

export default useModal;
