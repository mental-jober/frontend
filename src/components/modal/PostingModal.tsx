"use client";

import { useState } from "react";
import CommonModal from "./CommonModal";

export const PostingModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>포스팅 모달</button>

      <CommonModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="웹에 게시하겠습니까?"
        titleClassName="mb-4"
        subtitle="웹 게시 여부는 &lsquo;더보기&rsquo;란에서 변경할 수 있습니다."
        subtitleClassName="text-lg font-medium mb-4 h-[55px]"
      >
        <div className="w-[290px] h-[36px] mt-4">
          <button
            className="w-[143px] h-9 bg-[#999999] rounded mr-1 text-white text-bold"
            onClick={() => alert("나가기")}
          >
            예(공개)
          </button>
          <button
            className="w-[143px] h-9 bg-white text-[#4E546B] border border-[#D4D7DF] rounded text-bold"
            onClick={() => alert("나가기")}
          >
            아니오(비공개)
          </button>
        </div>
      </CommonModal>
    </>
  );
};
