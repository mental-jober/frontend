"use client";

import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { componentsSave } from "@/lib/api/componentsSaveAPI";
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

  const onSave = async () => {
    if (!text) {
      alert("내용이 비었습니다.");
      return;
    }

    const componentTempId = 7;
    const textType: "cont" | "link" | "temp" | "line" | "page" = "cont";
    const params = {
      id: 7,
      spaceWallTempId: 3,
      type: textType,
      content: text,
    };

    try {
      await componentsSave(componentTempId, params);
      showToast("성공적으로 저장되었습니다.");
      setPrevText(text);
    } catch (error) {
      showToast("저장에 실패했습니다. 다시 시도해주세요.");
      console.error("error:", error);
    }
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
