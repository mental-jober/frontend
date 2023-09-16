"use client";

import Button from "@/components/common/Button";
import TextEditor from "@/components/editor/FroalaTextEditor";
import useStore from "@/lib/store/store.module";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const TextEditPage = () => {
  const {
    titleText,
    setTitleText,
    currentText,
    currentIndex,
    setCurrentText,
    addBlock,
    updateBlock,
  } = useStore();
  const router = useRouter();

  const onTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleText(e.target.value);
  };

  const onSave = () => {
    if (!currentText.trim()) {
      alert("비었음");
      return;
    }

    if (currentIndex !== null) {
      updateBlock(currentIndex, titleText, currentText);
    } else {
      addBlock(titleText, currentText);
    }

    setTitleText("");
    setCurrentText("");
    router.push("/space");
  };

  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <textarea value={titleText} onChange={onTitleChange}></textarea>
        <div>
          <TextEditor />
        </div>

        <div className="mt-8">
          <Button $confrim="true" onClick={onSave}>
            확인
          </Button>
        </div>
      </div>
    </>
  );
};

export default TextEditPage;
