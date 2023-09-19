import React from "react";
import { AlertCommonModal, Button } from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";

const NotFoundMemberModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="찾을 수 없는 회원입니다."
        text="해당 이메일은 자버의 회원이 아닙니다. 이메일을 확인해주세요."
      />
      <Button onClick={() => {}} />
    </AlertCommonModal>
  );
};

export default NotFoundMemberModal;
