"use client";

import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import styled from "styled-components";

const PageView = () => {
  return (
    <PageViewBlock>
      <StyledLink href="">
        <a>페이지 제목 들어가는 곳 </a>
        <HiChevronRight />
      </StyledLink>
    </PageViewBlock>
  );
};

const PageViewBlock = styled.div`
  width: 316px;
  height: 40px;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 30px;
  border: 1px solid var(--foundation-grey-250, #dbe3ee);
  background: #fff;
  padding: 26px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 80px;

  a {
    color: #3b3b3b;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.28px;
    width: 170px;
  }
  svg {
    width: 18px;
    height: 18px;
    /* flex-shrink: 0; */
    color: #2593fc;
    justify-content: space-between;
  }
`;

export default PageView;
