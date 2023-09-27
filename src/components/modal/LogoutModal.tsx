"use client";
import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import { ModalProps } from "../../../hooks/UseModalHook";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { logoutApi } from "@/lib/api/api";
import { deleteAccessTokenCookie } from "@/lib/cookies";

const LogoutModal = ({ isOpen, onCloseModal }: ModalProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // const response = await logoutApi(); // 로그아웃 API 호출
      // if (response?.status === 200) {
      // }
      deleteAccessTokenCookie();
      router.push("/auth/login"); // 로그인 페이지로 이동
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <AlertCommonModal isOpen={isOpen} onCloseModal={onCloseModal}>
        <TitleHeader title="정말 로그아웃 하시겠습니까?" />
        <ButtonContainer>
          <Button
            $leftbtn="true"
            onClick={() => {
              onCloseModal();
            }}
          >
            취소
          </Button>
          <Button
            $rightbtn="true"
            onClick={() => {
              handleLogout();
            }}
          >
            확인
          </Button>
        </ButtonContainer>
      </AlertCommonModal>
    </>
  );
};

export default LogoutModal;
