"use client";

import Button from "@/components/common/Button";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { componentsSave } from "@/lib/api/componentsAPI";
import { froalaEditorStore, useToastStore } from "@/lib/store/store.module";
import { useComponentsViewQuery } from "@/queries/queries";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "../../../../../../../hooks/useDebounce";

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

  const deboucedText = useDebounce(text, 0);

  const onSave = useCallback(
    async (isAutoSave = false, text: string) => {
      if (!text) {
        showToast("텍스트를 입력하세요.");
        return;
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
    [NumContId, NumId, showToast, id, router],
  );

  useEffect(() => {
    if (deboucedText) {
      const autoSave = setTimeout(async () => {
        await onSave(true, deboucedText);
      }, 10000);
      return () => clearTimeout(autoSave);
    }
  }, [deboucedText, onSave]);

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
            onClick={() => onSave(false, text)}
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
