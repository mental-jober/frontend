"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

// TODO : 이름 바꾸기
const PostTemplate = () => {
  return (
    <PostTemplateLayout>
      <PostTemplateBlock>
        <ContentList>
          <span>제목</span>
          <span>내용</span>
        </ContentList>
        <StyledLink href="/space/profileConfirm">작성하기</StyledLink>
      </PostTemplateBlock>
    </PostTemplateLayout>
  );
};

const PostTemplateLayout = styled.div`
  width: 100%;
  max-width: 430px;
  min-width: 360px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const PostTemplateBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
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
  span {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: var(--foundation-blue-300, #2593fc);
  color: var(--900, #fff);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.1px;
`;

export default PostTemplate;
