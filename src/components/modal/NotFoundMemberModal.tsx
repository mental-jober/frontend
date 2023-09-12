import styled from "styled-components";

const NotFoundMemberModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <MainBox>
            <HeaderBox>
              <Title>찾을 수 없는 회원입니다.</Title>
              <SubTitle>
                해당 이메일은 자버의 회원이 아닙니다. 이메일을 확인해주세요.
              </SubTitle>
            </HeaderBox>
          </MainBox>
          <button onClick={onClose}>닫기</button>
        </ModalBox>
      </ModalOverlay>
    </>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 50;
`;

const ModalBox = styled.div`
  display: flex;
  width: 320px;
  padding: 24px 33px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(191, 192, 196, 0.18);
  z-index: 60;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Title = styled.h2`
  width: 264px;
  height: 21px;
  color: #1a1a1a;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const SubTitle = styled.p`
  width: 264px;
  height: 38px;
  color: ${({ theme }) => theme.gray.normalHover};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export default NotFoundMemberModal;
