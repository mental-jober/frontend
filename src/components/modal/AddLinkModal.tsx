import { useRef, MouseEvent, useState, ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { PiX } from "react-icons/pi";
import Button from "@/components/common/Button";
import { ModalClose, ModalContainer, ModalOverlay } from "./ModalParts";
import { useModal } from "../../../hooks/UseModalHook";
import { useParams } from "next/navigation";
import { componentsSave } from "@/lib/api/componentsAPI";
import useCompnetTempIdStore from "@/lib/store/useComponentTempIdStore";
import { useComponentsViewQuery } from "@/queries/queries";
import useComponentStore from "@/lib/store/useComponentStore";

const AddLinkModal = () => {
  const { isOpen, onCloseModal, type } = useModal();
  const [form, setForm] = useState({ title: "", text: "" });
  const { componentTempId } = useCompnetTempIdStore();
  const { setComponentValue } = useComponentStore();
  const { id } = useParams();

  const NumId = Number(id);
  const NumContId = Number(componentTempId);

  const { data } = useComponentsViewQuery(NumId, NumContId);

  const isModalOpen = isOpen && type === "AddLink";

  useEffect(() => {
    if (data) {
      setForm({
        title: data.data.title ? data.data.title : "",
        text: data.data.content ? data.data.content : "",
      });
    }
  }, [setForm, data, isOpen]);

  const modalRef = useRef(null);

  if (!isModalOpen) return null;

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const modalClose = (e: MouseEvent) => {
    if (e.target === modalRef.current) onCloseModal();
  };

  const onSave = async () => {
    if (!form.title || !form.text) {
      return false;
    }
    const params = {
      componentTempId: NumContId,
      title: form.title,
      content: form.text,
    };

    try {
      await componentsSave(NumId, params);
      setComponentValue(NumId, NumContId, "title", form.title);
      setComponentValue(NumId, NumContId, "content", form.text);
      onCloseModal();
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <ModalContainer>
        <ModalOverlay ref={modalRef} onClick={modalClose}>
          <AddLinkModalBox>
            <ModalClose>
              <PiX size="18" onClick={modalClose} />
            </ModalClose>
            <AddLinkModdalHeader>
              <AddLinkModalTitle>링크추가</AddLinkModalTitle>
              <AddLinkModalSubtitle>
                추가할 링크 URL을 입력해 주세요.
              </AddLinkModalSubtitle>
            </AddLinkModdalHeader>
            <AddLinkModalForm>
              <AddLinkModalTextBox>
                <AddLinkModalText>텍스트</AddLinkModalText>
                <AddLinkModalTextInput
                  type="text"
                  name="title"
                  value={form.title}
                  placeholder="텍스트를 입력하세요."
                  onChange={onFormChange}
                />
              </AddLinkModalTextBox>
              <AddLinkModalLinkBox>
                <AddLinkModalLink>링크</AddLinkModalLink>
                <AddLinkModalLinkInput
                  type="text"
                  name="text"
                  value={form.text}
                  onChange={onFormChange}
                  placeholder="링크 URL을 입력하세요."
                />
              </AddLinkModalLinkBox>
            </AddLinkModalForm>
            <BtnContainer>
              <Button $save type="submit" onClick={() => onSave()}>
                저장하기
              </Button>
            </BtnContainer>
          </AddLinkModalBox>
        </ModalOverlay>
      </ModalContainer>
    </>
  );
};

const AddLinkModalBox = styled.div`
  width: 320px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.gray[0]};
  padding: 0 20px;
`;

const AddLinkModdalHeader = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const AddLinkModalTitle = styled.div`
  width: 100%;
  height: 21px;
  ${({ theme }) => theme.textColor.gray[950]};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const AddLinkModalSubtitle = styled.div`
  width: 100%;
  height: 19px;
  ${({ theme }) => theme.textColor.gray[700]};
  ${({ theme }) => theme.text.text1.medium};
  font-size: 14px;
`;

const AddLinkModalForm = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 19px;
`;

const AddLinkModalTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const AddLinkModalText = styled.span`
  ${({ theme }) => theme.text.text2.medium}
  height: 17px;
`;

const AddLinkModalTextInput = styled.input`
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #dbe3ee;
  border: none;
  padding-left: 26px;
`;

const AddLinkModalLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const AddLinkModalLink = styled.span`
  ${({ theme }) => theme.text.text2.medium}
  height: 17px;
`;

const AddLinkModalLinkInput = styled.input`
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #dbe3ee;
  border: none;
  padding-left: 26px;
`;

const BtnContainer = styled.div`
  width: 100%;
  margin: 18px 0 33px 0;
`;

export default AddLinkModal;
