import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
  LeftButton,
  RightButton,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

export const ExitPageModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="페이지를 나가시겠습니까?"
          text="저장하지 않으면 작성된 내용이 <초기화> 됩니다!"
        />
      </AlertCommonModal>
      <ButtonContainer>
        <LeftButton name="머무르기" onClick={onCloseModal} />
        <RightButton name="나가기" onClick={() => {}} />
      </ButtonContainer>
    </>
  );
};

export default ExitPageModal;
