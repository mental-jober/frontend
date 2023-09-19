import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
  LeftButton,
  RightButton,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

export const DeletePermissonModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="권한 삭제"
        text="이 계정에 대한 권한을 삭제하시겠습니까?"
      />
      <ButtonContainer>
        <LeftButton name="취소" onClick={onCloseModal} />
        <RightButton name="삭제하기" onClick={() => {}} />
      </ButtonContainer>
    </AlertCommonModal>
  );
};

export default DeletePermissonModal;
