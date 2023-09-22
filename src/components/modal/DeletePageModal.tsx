import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "../common/Button";

export const DeletePageModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="페이지를 삭제하시겠습니까?"
        text={`해당 페이지를 정말로 삭제하시겠습니까?\n페이지 복구는 불가합니다.`}
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

export default DeletePageModal;
