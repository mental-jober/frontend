"use client";

import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { froalaEditorStore, useToastStore } from "@/lib/store/store.module";
import { useEffect, useState } from "react";

const TextEditPage = () => {
  const { text } = froalaEditorStore();
  const [prevText, setPrevText] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const { showToast } = useToastStore();

  useEffect(() => {
    const saveInterval = setInterval(() => {
      showToast("자동 저장 중...");
    }, 10000);

    return () => clearInterval(saveInterval);
  }, [showToast]);

  useEffect(() => {
    setIsBtnDisabled(!text || text === prevText);
  }, [text, prevText]);

  const onSave = () => {
    if (!text) {
      alert("내용이 비었습니다.");
      return;
    }
    setPrevText(text);
  };

  return (
    <>
      <div className="flexable flex-col">
        <Header />
        <div className="mt-4">
          <TextEditor />
        </div>

        <div className="mt-8 w-full">
          <Button
            onClick={onSave}
            disabled={isBtnDisabled}
            {...(isBtnDisabled ? { $disabled: "true" } : { $save: "true" })}
          >
            확인
          </Button>
        </div>
      </div>
      <ToastUi />
    </>
  );
};

export default TextEditPage;
