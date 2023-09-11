"use client";

import { useState } from "react";
import CommonModal from "./CommonModal";

export const PrivateModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>비공개 모달</button>

      <CommonModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="비공개 페이지입니다!"
      >
        <div className="w-[290px] h-[36px] mt-6">
          <button
            className="w-full h-9 bg-[#999999] rounded-lg mr-1 text-white text-bold"
            onClick={() => alert("확인")}
          >
            확인
          </button>
        </div>
      </CommonModal>
    </>
  );
};
