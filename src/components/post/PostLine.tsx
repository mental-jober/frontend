import styled from "styled-components";

const PostMiddleLine = () => {
  return <Line />;
};

// 지우지 말 것!
/* const LineBlock = styled.div`
  width: 100%;
  max-width: 430px;
  min-width: 360px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`; */

const Line = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--foundation-grey-900, #444a51);
`;

export default PostMiddleLine;
