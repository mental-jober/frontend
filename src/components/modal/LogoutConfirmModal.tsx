import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
  LeftButton,
  RightButton,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

export const LogoutConfirmModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="정말 로그아웃 하시겠습니까?"
        text=""
      />
      <ButtonContainer>
        <LeftButton name="취소" onClick={onCloseModal} />
        <RightButton name="확인" onClick={() => {
          // 로그아웃 처리 로직
        }} />
      </ButtonContainer>
    </AlertCommonModal>
  );
};

export default LogoutConfirmModal;
