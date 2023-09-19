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
      // 여기서 실제 저장 로직을 구현할 수 있습니다.
      showToast("자동 저장 중...");
    }, 10000); // 10초마다

    // 컴포넌트가 언마운트 될 때 타이머를 제거합니다.
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
