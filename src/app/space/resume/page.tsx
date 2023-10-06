"use client";

import Header from "@/components/common/Header";
import LinkPage from "@/components/post/LinkPage";
import PostLine from "@/components/post/PostLine";
import PostTemplate from "@/components/post/PostTemplate";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import Link from "next/link";
import styled from "styled-components";

const dummyData = [
  {
    id: 1,
    title: "첫 번째 포스트",
    content: "첫 번째 포스트 내용",
  },
  {
    id: 2,
    title: "두 번째 포스트",
    content: "두 번째 포스트 내용",
  },

  {
    id: 3,
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용",
  },
  {
    id: 4,
    title: "네 번째 포스트",
    content: "네 번째 포스트 내용",
  },
];

const ResumePage = () => {
  return (
    <>
      <Header />
      <ResumeBlock>
        <IntroProfile />
        <SocialList>
          <StyledLink href="#">링크</StyledLink>
          <StyledLink href="#">링크</StyledLink>
          <StyledLink href="#">링크</StyledLink>
        </SocialList>
        <PostContentBlock>
          {dummyData.map((item) => (
            <PostContent key={item.id}>
              <h2>{item.title}</h2>
              <PostLine />
              <p>{item.content}</p>
            </PostContent>
          ))}
        </PostContentBlock>
        <LinkPage />
        <LinkPage />
        <LinkPage />
        <LinkPage />
        <PostTemplate />
      </ResumeBlock>
    </>
  );
};

const ResumeBlock = styled.div`
  gap: 18px;
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 20px;
  a {
    &:nth-child(even)::before {
      content: "|";
      margin: 0 10px;
      color: #000; // 나중에 색은 바꾸세요
    }
    &:nth-child(even)::after {
      content: "|";
      margin: 0 10px;
      color: #000; // 나중에 색은 바꾸세요
    }
  }
`;

const PostContentBlock = styled.div`
  width: 100%;
  max-width: 430px;
  min-width: 360px;
  padding: 0 20px;
`;

const PostContent = styled.div`
  margin-bottom: 20px;
  h2 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    margin-top: 8px;
  }
`;

const StyledLink = styled(Link)`
  color: #2593fc;
  font-size: 14px;
  font-weight: 700;
`;

export default ResumePage;
