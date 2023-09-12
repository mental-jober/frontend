"use client";

import Button from "@/components/common/Button";
import TextEditor from "@/components/editor/FroalaTextEditor";

const TextEditPage = () => {
  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <div>
          <TextEditor />
        </div>

        <div className="mt-8">
          <Button
            $normal="true"
            className="w-[281px] h-[50px] text-center bg-[#919090] rounded-[7px] font-bold "
            onClick={() => {
              alert("확인 버튼이 클릭되었습니다!");
            }}
          >
            확인
          </Button>
        </div>
      </div>
    </>
  );
};

export default TextEditPage;
