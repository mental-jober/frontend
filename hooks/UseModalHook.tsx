import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpenModal,
    onCloseModal,
  };
}

export default useModal;
