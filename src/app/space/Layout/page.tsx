"use client";
// import React from "react";
// import Resume from "@/components/postLayout/Resume";
// import TemplateView from "@/components/post/TemplateView";
import IntroProfile from "@/components/spaceLayout/IntroProfile";
import BlockLink from "@/components/spaceLayout/block/BlockLink";
import PostMiddleLine from "@/components/post/PostMiddleLine";

const PostLayoutPage = () => {
  return (
    <>
      <div>
        {/* <Resume /> */}
        <IntroProfile />
        <BlockLink />
        <PostMiddleLine />
      </div>
    </>
  );
};

export default PostLayoutPage;
