"use client";

import useModal from "../../../hooks/UseModalHook";
import PermissionSettingAfterModal from "@/components/modal/PermissionSettingAfterModal";

const App = () => {
  const modalConfig = {
    NotFound: useModal(),
    Partial: useModal(),
    All: useModal(),
  };

  return (
    <>
      <div>
        <button onClick={modalConfig.NotFound.onOpenModal}>
          회원 없음 모달
        </button>
        <PermissionSettingAfterModal
          isOpen={modalConfig.NotFound.isOpen}
          onCloseModal={modalConfig.NotFound.onCloseModal}
        />
      </div>
    </>
  );
};
export default App;
