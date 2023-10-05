import styled from "styled-components";
import { PiPencilSimpleLine } from "react-icons/pi";

const IntroEditButton = () => {
  return (
    <Wrapper>
      <StyledPencilIcon />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  width: 29.5px;
  height: 29.5px;
  position: absolute;
  align-items: center;
  background: #e7e7e7;
  border-radius: 29.5px;
  justify-content: center;
  border: 0.921px solid #fff;
  transform: translateX(44.25px) translateY(14.75px);
`;

const StyledPencilIcon = styled(PiPencilSimpleLine)`
  width: 18.422px;
  height: 18.422px;
  color: #9d9d9d;
`;

export default IntroEditButton;
