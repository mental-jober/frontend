"use client";

import PermissionModal from "@/components/permissonModal/PermissionModal";
import useModal from "../../../hooks/UseModalHook";
import NotFoundMemberModal from "@/components/modal/DeletePermissonModal";

const App = () => {
  const modalConfig = {
    NotFound: useModal(),
    Partial: useModal(),
    All: useModal(),
  };

  const managerChoice = {
    value: "manager",
    title: "매니저",
    description:
      "소유자와 동일한 권한입니다. \n(페이지 편집 및 삭제, 권한부여 가능)",
  };

  const editorChoice = {
    value: "editor",
    title: "편집자",
    description: "페이지를 편집 할 수 있는 권한을 가집니다.",
  };

  const guestChoice = {
    value: "guest",
    title: "게스트",
    description: "페이지를 읽을 수 있는 권한만 가집니다.",
  };

  const partialChoices = [managerChoice, editorChoice, guestChoice];
  const allChoices = [managerChoice, editorChoice];

  return (
    <>
      <div>
        <button onClick={modalConfig.NotFound.onOpenModal}>
          회원 없음 모달
        </button>
        <NotFoundMemberModal
          isOpen={modalConfig.NotFound.isOpen}
          onCloseModal={modalConfig.NotFound.onCloseModal}
        />
      </div>

      <div>
        <button onClick={modalConfig.Partial.onOpenModal}>일부공개</button>
      </div>
      <div>
        <button onClick={modalConfig.All.onOpenModal}>전체공개</button>
      </div>

      <PermissionModal
        choicesData={partialChoices}
        isOpen={modalConfig.Partial.isOpen}
        onCloseModal={modalConfig.Partial.onCloseModal}
      />

      <PermissionModal
        choicesData={allChoices}
        isOpen={modalConfig.All.isOpen}
        onCloseModal={modalConfig.All.onCloseModal}
      />
    </>
  );
};
export default App;
