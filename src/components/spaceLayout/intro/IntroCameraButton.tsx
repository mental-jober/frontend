import styled from "styled-components";
import { PiCamera } from "react-icons/pi";

const IntroCameraButton = () => {
  return (
    <Wrapper>
      <StyledCameraIcon />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  top: 10px;
  right: 20px;
  display: flex;
  width: 29.5px;
  height: 29.5px;
  position: absolute;
  align-items: center;
  background: #e7e7e7;
  border-radius: 29.5px;
  justify-content: center;
  border: 0.921px solid #fff;
`;

const StyledCameraIcon = styled(PiCamera)`
  width: 18.422px;
  height: 18.422px;
  color: #9d9d9d;
`;

export default IntroCameraButton;
