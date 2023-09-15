"use client";

import {
  NotFoundMemberModal,
  DeletePermissonModal,
} from "@/components/modal/Modal";
import useModal from "../../../../../../hooks/UseModalHook";

const ParentComponent = () => {
  const modalConfig = {
    NotFound: useModal(),
    Delete: useModal(),
    Layout: useModal(),
    PermissionSetting: useModal(),
    PublicScope: useModal(),
    ExitPage: useModal(),
  };

  const onDeletePermisson = () => {
    alert("삭제하기");
  };

  return (
    <>
      <div>
        <button onClick={modalConfig.NotFound.onOpenModal}>
          회원 없음 모달
        </button>
        <NotFoundMemberModal
          isOpen={modalConfig.NotFound.isOpen}
          onCloseModal={modalConfig.NotFound.onCloseModal}
        />
      </div>

      <div>
        <button onClick={modalConfig.Delete.onOpenModal}>권한 삭제 모달</button>
        <DeletePermissonModal
          isOpen={modalConfig.Delete.isOpen}
          onCloseModal={modalConfig.Delete.onCloseModal}
          onButton2Click={onDeletePermisson}
        />
      </div>
    </>
  );
};

export default ParentComponent;
