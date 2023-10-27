"use client";

import LinkPage from "@/components/post/LinkPage";
import PostLine from "@/components/post/PostLine";
import PostTemplate from "@/components/post/PostTemplate";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
// import DropdownMenu from "@/components/post/DropDowun";
// import { HiChevronRight } from "react-icons/hi"; // 화살표 아이콘
// import { IoLinkOutline } from "react-icons/io5"; // 복사 아이콘

// const items = [
//   { id: 1, label: "공개범위", icon: <HiChevronRight /> },
//   { id: 2, label: "공동 작업자 추가", icon: <HiChevronRight /> },
//   { id: 3, label: "링크", icon: <IoLinkOutline /> },
//   { id: 4, label: "전체보기로 보기" },
// ];

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
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },

  {
    id: 3,
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용",
  },
];

const CompanyInfoPage = () => {
  return (
    <>
<<<<<<< HEAD
      {/* <div>
        <DropdownMenu items={items} />
      </div> */}
      <Header />
      <Margin />
=======
>>>>>>> 7b39adf0e102dc01d36334bf9a5d0623711b878f
      <CompanyInfoBlock>
        <IntroProfile />
        <SocialList>
          <StyledLink href="#">링크</StyledLink>
        </SocialList>
        <PostContentBlock>
          {dummyData.map((item) => (
            <PostContent key={item.id}>
              <h2>{item.title}</h2>
              <PostLine />
              <p>{item.content}</p>
              {item.videoUrl && ( // 동영상 URL이 존재할 때만 렌더링//
                <iframe
                  src={item.videoUrl}
                  title="#"
                  width="320px"
                  height="180px"
                  style={{
                    display: "flex",
                    padding: "12px 0px",
                  }}
                ></iframe>
              )}
            </PostContent>
          ))}
        </PostContentBlock>
        <LinkList>
          <StyledLink href="#">링크</StyledLink>
          <StyledLink href="#">링크</StyledLink>
          <StyledLink href="#">링크</StyledLink>
        </LinkList>
        <PostTemplate />
        <LinkPage />
        <LinkPage />
        <Line>
          <PostLine />
        </Line>
        <PostTemplate />
        <LinkPage />
      </CompanyInfoBlock>
    </>
  );
};

const CompanyInfoBlock = styled.div`
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
    padding: 16px 4px;
  }
`;

const StyledLink = styled(Link)`
  color: #2593fc;
  font-size: 14px;
  font-weight: 700;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 8px 4px;
  gap: 10px;
`;

const Line = styled.div`
  width: 320px;
  max-width: 430px;
  min-width: 360px;
  padding: 0 20px;
  height: 2px;
  border-radius: 2px;
  padding: 8px 0px;
  background: var(#444a51);
`;
export default CompanyInfoPage;
