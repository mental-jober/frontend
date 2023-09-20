import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "../common/Button";

export const DeletePermissonModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="권한 삭제"
        text="이 계정에 대한 권한을 삭제하시겠습니까?"
      />
      <ButtonContainer>
        <Button $leftbtn="true">취소</Button>
        <Button $rightbtn="true">삭제하기</Button>
      </ButtonContainer>
    </AlertCommonModal>
  );
};

export default DeletePermissonModal;
