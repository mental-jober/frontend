import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "@/components/common/Button";

export const ExitPageModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="페이지를 나가시겠습니까?"
          text="저장하지 않으면 변경된 내용이 초기화됩니다."
        />
        <ButtonContainer>
          <Button $leftbtn="true" onClick={() => {}}>
            머무르기
          </Button>
          <Button $rightbtn="true" onClick={() => {}}>
            나가기
          </Button>
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default ExitPageModal;
