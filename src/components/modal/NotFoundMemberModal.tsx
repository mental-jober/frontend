import { AlertCommonModal } from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "@/components/common/Button";
import { useModal } from "../../../hooks/UseModalHook";

const NotFoundMemberModal = () => {
  const { isOpen, onCloseModal, type } = useModal();

  const isModalOpen = isOpen && type === "NotFoundMember";

  return (
    <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
      <TitleHeader
        title="찾을 수 없는 회원입니다."
        text={`해당 이메일은 자버의 회원이 아닙니다.\n이메일을 확인해주세요.`}
      />
      <Button $confirm="true" onClick={onCloseModal}>
        확인
      </Button>
    </AlertCommonModal>
  );
};

export default NotFoundMemberModal;
