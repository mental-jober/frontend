import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
  LeftButton,
  RightButton,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

export const PublicScopeModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="전체 공개로 변경하시겠습니까?"
          text="게스트로 지정된 권한이 사라집니다. 
          그래도 전체 공개로 변경하시겠습니까?"
        />
        <ButtonContainer>
          <LeftButton name="취소" onClick={onCloseModal} />
          <RightButton name="변경하기" onClick={() => {}} />
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default PublicScopeModal;
