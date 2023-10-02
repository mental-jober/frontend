import styled from "styled-components";

const PostMiddleLine = () => {
  return <Line />;
};

const Line = styled.div`
  width: 320px;
  height: 2px;
  border-radius: 2px;
  background: var(--foundation-grey-900, #444a51);
`;

export default PostMiddleLine;
