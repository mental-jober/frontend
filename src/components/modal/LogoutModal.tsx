"use client";
import React from "react";
import {
  AlertCommonModal,
  ButtonContainer,
} from "@/components/modal/CommonModal";
import TitleHeader from "./AlertTitleHeader";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
/* import { logoutApi } from "@/lib/api/api"; */
import { deleteAccessTokenCookie } from "@/lib/cookies";
import { useModal } from "../../../hooks/UseModalHook";

const LogoutModal = () => {
  const { isOpen, onCloseModal, type } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "Logout";

  const handleLogout = async () => {
    try {
      // const response = await logoutApi(); // 로그아웃 API 호출
      // if (response?.status === 200) {
      // }
      deleteAccessTokenCookie();
      onCloseModal();
      router.push("/auth/login"); // 로그인 페이지로 이동
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <AlertCommonModal isOpen={isModalOpen} onCloseModal={onCloseModal}>
        <TitleHeader title="정말 로그아웃 하시겠습니까?" />
        <ButtonContainer>
          <Button
            $leftbtn
            onClick={() => {
              onCloseModal();
            }}
          >
            취소
          </Button>
          <Button
            $rightbtn
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
