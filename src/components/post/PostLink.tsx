import Link from "next/link";
import styled from "styled-components";

const PostLink = () => {
  return (
    <PostLinkBlock>
      <div>
        <Link href="">링크</Link>
      </div>
    </PostLinkBlock>
  );
};

const PostLinkBlock = styled.div`
  color: #2593fc;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

export default PostLink;
