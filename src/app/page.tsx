"use client";

import NotFoundMemberModal from "@/components/modal/NotFoundMemberModal";
import useModal from "../../hooks/UseModalHook";

const Home = () => {
  const { isOpen, onCloseModal, onOpenModal } = useModal();

  return (
    <>
      <div>
        <button onClick={onOpenModal}>모달 열기</button>
      </div>
      {isOpen && <NotFoundMemberModal onClose={onCloseModal} />}
    </>
  );
};

export default Home;
