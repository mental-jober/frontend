"use client";
import React from "react";
import IntroProfile from "../spaceLayout/IntroProfile";
import PostLink from "../post/PostLink";
import PostMiddleLine from "../post/PostMiddleLine";
import PostContent from "../post/PostContent";
const Resume = () => {
  return (
    <>
      <div>
        <IntroProfile />
        <PostLink />
        <PostMiddleLine />
        <PostContent />
      </div>
    </>
  );
};

export default Resume;
