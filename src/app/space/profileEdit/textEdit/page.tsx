"use client";

import TextEditor from "@/components/editor/FroalaTextEditor";
import { OutPageModal } from "@/components/modal/OutPageModal";
import { PostingModal } from "@/components/modal/PostingModal";
import { PrivateModal } from "@/components/modal/PrivateModal";

const TextEditPage = () => {
  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <div>
          <TextEditor />
        </div>

        <div className="mt-8">
          <button
            className="w-[281px] h-[50px] text-center bg-[#919090] rounded-[7px] font-bold "
            onClick={() => {
              alert("확인 버튼이 클릭되었습니다!");
            }}
          >
            확인
          </button>
        </div>
        <OutPageModal />
        <PrivateModal />
        <PostingModal />
      </div>
    </>
  );
};

export default TextEditPage;
