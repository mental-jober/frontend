"use client";

import styled from "styled-components";

interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return <StyledToast>{message}</StyledToast>;
};

const StyledToast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 60px;
  width: 320px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(50, 50, 50, 0.8);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 20.957px */
  letter-spacing: -0.265px;
  z-index: 100;
`;

export default Toast;
