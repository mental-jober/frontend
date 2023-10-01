import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "../common/Button";
import { useModal } from "../../../hooks/UseModalHook";

export const DeletePermissonModal = () => {
  const { isOpen, onCloseModal, type } = useModal();

  const isModalOpen = isOpen && type === "DeletePermission";

  return (
    <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="권한 삭제"
        text="이 계정에 대한 권한을 삭제하시겠습니까?"
      />
      <ButtonContainer>
        <Button $leftbtn="true" onClick={() => {}}>
          취소
        </Button>
        <Button $rightbtn="true" onClick={() => {}}>
          삭제하기
        </Button>
      </ButtonContainer>
    </AlertCommonModal>
  );
};

export default DeletePermissonModal;
