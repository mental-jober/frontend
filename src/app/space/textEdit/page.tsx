"use client";

import Button from "@/components/common/Button";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { useToastStore } from "@/lib/store/store.module";
import { ChangeEvent, useEffect, useState } from "react";

const TextEditPage = () => {
  const [titleText, setTitleText] = useState("");

  const { showToast } = useToastStore();

  useEffect(() => {
    const saveInterval = setInterval(() => {
      showToast("자동 저장 중...");
    }, 2000);

    return () => clearInterval(saveInterval);
  }, [showToast]);

  const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleText(e.target.value);
  };

  const onSave = () => {
    alert("비었음");
    return;
  };

  return (
    <>
      <div className="flexable flex-col">
        <div className="mt-6 w-full">
          <textarea
            placeholder="이름을 입력해주세요."
            className="w-full h-[27px] border-0 p-0 text-[20px]"
            value={titleText}
            onChange={onTitleChange}
          />
        </div>
        <div className="mt-4">
          <TextEditor />
        </div>

        <div className="mt-8">
          <Button $save="true" onClick={onSave}>
            확인
          </Button>
        </div>
      </div>
      <ToastUi />
    </>
  );
};

export default TextEditPage;
