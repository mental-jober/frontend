"use client";

import CommonModal from "./CommonModal";
import useModal from "../../../hooks/UseModalHook";

export const OutPageModal = () => {
  const { isOpen, onOpenModal, onCloseModal } = useModal();
  return (
    <>
      <button onClick={onOpenModal}>나가기 모달</button>

      <CommonModal
        isOpen={isOpen}
        onClose={onCloseModal}
        title="페이지를 나가시겠습니까?"
        titleClassName="mb-2"
        subtitle="저장하지 않으면 작성된 내용이 &lsquo;초기화&rsquo;됩니다!"
        subtitleClassName="text-xs h-[20px]"
      >
        <div className="w-[290px] h-[36px] mt-4">
          <button
            className="w-[143px] h-9 bg-[#999999] rounded-lg mr-1 text-white text-bold"
            onClick={() => alert("나가기")}
          >
            나가기
          </button>
          <button
            className="w-[143px] h-9 bg-white text-[#4E546B] border border-[#D4D7DF] rounded-lg text-bold"
            onClick={() => alert("나가기")}
          >
            머무르기
          </button>
        </div>
      </CommonModal>
    </>
  );
};
