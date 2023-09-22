import React from "react";
import { AlertCommonModal } from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "@/components/common/Button";

const NotFoundMemberModal = ({ isOpen, onCloseModal }: ModalProps) => {
  return (
    <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="찾을 수 없는 회원입니다."
        text={`해당 이메일은 자버의 회원이 아닙니다.\n이메일을 확인해주세요.`}
      />
      <Button $confirm="true" onClick={() => {}}>
        확인
      </Button>
    </AlertCommonModal>
  );
};

export default NotFoundMemberModal;
