"use client";

import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import styled from "styled-components";

const LinkPage = () => {
  return (
    <LinkPageBlock>
      <StyledLink href="">
        페이지 제목 들어가는 곳
        <HiChevronRight />
      </StyledLink>
    </LinkPageBlock>
  );
};

const LinkPageBlock = styled.div`
  width: 100%;
  max-width: 430px;
  min-width: 360px;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  width: inherit;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  border: 1px solid var(--foundation-grey-250, #dbe3ee);
  background: #fff;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  color: #3b3b3b;
  font-size: 14px;
  font-weight: 700;
  svg {
    font-size: 18px;
    color: #2593fc;
  }
`;

export default LinkPage;
