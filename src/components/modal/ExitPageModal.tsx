import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "@/components/common/Button";
import { usePathname, useRouter } from "next/navigation";
import { useModal } from "../../../hooks/UseModalHook";

const ExitPageModal = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { isOpen, onCloseModal, type } = useModal();

  const isModalOpen = isOpen && type === "ExitPage";

  const onExit = () => {
    if (pathName === "/test") {
      onCloseModal();
      router.push("/");
    }
  };
  return (
    <>
      <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
        <TitleHeader
          title="페이지를 나가시겠습니까?"
          text="저장하지 않으면 변경된 내용이 초기화됩니다."
        />
        <ButtonContainer>
          <Button $leftbtn="true" onClick={onCloseModal}>
            머무르기
          </Button>
          <Button $rightbtn="true" onClick={onExit}>
            나가기
          </Button>
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default ExitPageModal;
