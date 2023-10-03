"use client";

import Header from "@/components/common/Header";
import Margin from "@/components/common/Margin";
import LinkPage from "@/components/post/LinkPage";
import PostLine from "@/components/post/PostLine";
import PostTemplate from "@/components/post/PostTemplate";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const dummyData = [
  {
    id: 1,
    title: "첫 번째 포스트",
    content: "첫 번째 포스트 내용",
    imageUrl: "https://loremflickr.com/320/240/",
    videoUrl: "https://example.com/video1.mp4",
  },
  {
    id: 2,
    title: "두 번째 포스트",
    content: "두 번째 포스트 내용",
    imageUrl: "https://loremflickr.com/320/240/",
    videoUrl: "https://example.com/video2.mp4",
  },

  {
    id: 3,
    title: "세 번째 포스트",
    content: "세 번째 포스트 내용",
    imageUrl: "https://loremflickr.com/320/240/",
    videoUrl: "https://example.com/video3.mp4",
  },
];

const ProductInfoPage = () => {
  return (
    <>
      <Header />
      <Margin />
      <ResumeBlock>
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
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={320}
                height={240}
              />
              {dummyData.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  {/* iframe 태그 공부해서 바꾸기 */}
                  <video controls>
                    <source src={item.videoUrl} type="video/mp4" />
                    {/* Your browser does not support the video tag. */}
                  </video>
                  <PostLine />
                </div>
              ))}
            </PostContent>
          ))}
        </PostContentBlock>
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
export default ProductInfoPage;
