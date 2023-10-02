"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const TemplateView = () => {
  return (
    <TemplateViewPageBlock>
      <ContentList>
        <a>제목</a>
        <a>내용</a>
      </ContentList>
      <Link href="/space/profileConfirm">
        <StyledLink>
          <a>작성하기</a>
        </StyledLink>
      </Link>
    </TemplateViewPageBlock>
  );
};

const TemplateViewPageBlock = styled.div`
  display: flex;
  width: 320px;
  padding: 16px 2px 4px 2px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 15px;
  border: 1px solid var(--foundation-grey-250, #dbe3ee);
  background: var(--foundation-grey-0, #fff);
`;

const ContentList = styled.div`
  display: flex;
  padding: var(--space-4, 16px) 22px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  align-self: stretch;
  a {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    width: 194px;
    height: 19px;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledLink = styled.button`
  width: 272px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-self: stretch;
  padding: var(--space-2, 8px) var(--space-1, 4px);
  justify-content: center;
  border-radius: 30px;
  background: var(--foundation-blue-300, #2593fc);
  align-items: center;
  text-align: center;
  gap: var(--space-1, 4px);
  margin-left: 22px;
  margin-right: 22px;
  margin-bottom: 16px;
  align-self: stretch;
  a {
    color: var(--900, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.096px;
  }
`;

export default TemplateView;
