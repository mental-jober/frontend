"use client";

import Button from "@/components/common/Button";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { componentsSave } from "@/lib/api/componentsAPI";
import { froalaEditorStore, useToastStore } from "@/lib/store/store.module";
import { useComponentsViewQuery } from "@/queries/queries";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const TextEditPage = () => {
  const { text, setText } = froalaEditorStore();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const router = useRouter();

  const { id, contId } = useParams();

  const NumId = Number(id);
  const NumContId = Number(contId);

  const { data } = useComponentsViewQuery(NumId, NumContId);

  useEffect(() => {
    setText(data?.data.content ? data.data.content : "");
  }, [setText, data]);

  const { showToast } = useToastStore();

  const onSave = useCallback(
    async (isAutoSave = false) => {
      if (!text) {
        if (!isAutoSave) showToast("텍스트를 입력하세요.");
        return false;
      }

      const params = {
        componentTempId: NumContId,
        content: text,
      };

      try {
        await componentsSave(NumId, params);
        showToast(isAutoSave ? "자동 저장 중입니다." : "저장되었습니다.");
        if (!isAutoSave) {
          router.push(`/space/${id}/edit`);
        }
      } catch (error) {
        console.error("error:", error);
      }
    },
    [text, NumContId, NumId, showToast, id, router],
  );

  useEffect(() => {
    const autoSave = setInterval(async () => {
      await onSave(true);
    }, 10000);

    return () => clearInterval(autoSave);
  }, [showToast, onSave]);

  useEffect(() => {
    setIsBtnDisabled(!text);
  }, [text]);

  return (
    <>
      <div className="flexable flex-col">
        <div className="mt-4">
          <TextEditor />
        </div>

        <div className="mt-8 w-full">
          <Button
            onClick={() => onSave(false)}
            disabled={isBtnDisabled}
            {...(isBtnDisabled ? { $disabled: true } : { $save: true })}
          >
            저장
          </Button>
        </div>
      </div>
      <ToastUi />
    </>
  );
};

export default TextEditPage;
