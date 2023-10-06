"use client";

import Header from "@/components/common/Header";
import LinkPage from "@/components/post/LinkPage";
import PostLine from "@/components/post/PostLine";
import PostTemplate from "@/components/post/PostTemplate";
import IntroBackGround from "@/components/spaceLayout/intro/IntroBackGround";
import styled from "styled-components";
import Image from "next/image";

const dummyData = [
  {
    id: 1,
    title: "첫 번째 포스트",
    content: "첫 번째 포스트 내용",
    // imageUrl: "https://loremflickr.com/320/240/",
  },
  {
    id: 2,
    title: "두 번째 포스트",
    content: "두 번째 포스트 내용",
    imageUrl: "https://loremflickr.com/320/240/",
  },

  {
    id: 3,
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용",
    // imageUrl: "https://loremflickr.com/320/240/",
  },
];

const EventPage = () => {
  return (
    <>
      <Header />
      <EventBlock>
        <IntroBackGround />
        <EventBlock>
          {dummyData.map((item) => (
            <PostContent key={item.id}>
              <h2>{item.title}</h2>

              <p>{item.content}</p>
              {item.imageUrl && ( // 이미지가 있을 때만 렌더링
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={320}
                  height={240}
                />
              )}
              <PostLine />
            </PostContent>
          ))}
        </EventBlock>
        <PostTemplate />
        <PostTemplate />
        <PostLine />
        <LinkPage />
        <LinkPage />
      </EventBlock>
    </>
  );
};

const EventBlock = styled.div`
  gap: 18px;
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const EventContentBlock = styled.div`
//   width: 100%;
//   max-width: 430px;
//   min-width: 360px;
//   padding: 20px;
// `;

const PostContent = styled.div`
  margin-bottom: 20px;
  h2 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    padding: 20px;
  }
  p {
    margin-top: 8px;
  }
`;

export default EventPage;
