import { styled } from "styled-components";
import Header from "@/components/common/Header";
import Button from "@/components/common/Button";
import CustomDropdown from "./CustomDropdown";

const CollaboratorPage = () => {
  const owner = {
    name: "김땡땡",
    email: "땡땡땡@naver.com",
    value: "소유자",
  };
  const invited = [
    {
      name: "남기훈",
      email: "adfd@naver.com",
      value: "편집자",
    },
    {
      name: "배지환",
      email: "adfd@naver.com",
      value: "뷰어",
    },
    {
      name: "배지환",
      email: "adfd@naver.com",
      value: "편집자",
    },
    {
      name: "배지환",
      email: "adfd@naver.com",
      value: "뷰어",
    },
  ];

  return (
    <div className="">
      <Header />
      <Container>
        <PageHeadline>공동 작업자 추가</PageHeadline>
        <InputContainer>
          <MixBox>
            <StyledInput type="text" placeholder="Email(자버계정)" />
            <CustomDropdown />
          </MixBox>
          <Button $invitebtn="true">초대</Button>
        </InputContainer>
        <Members>
          <Owner>
            <OwnerName> {owner.name}</OwnerName>
            <OwnerEmail>{owner.email}</OwnerEmail>
            <OwnerValue>{owner.value}</OwnerValue>
          </Owner>
          {invited.map((invite, index) => (
            <Invitee key={index}>
              <InviteeName>{invite.name}</InviteeName>
              <InviteeEmail>{invite.email}</InviteeEmail>
              <InviteeValue>{invite.value}</InviteeValue>
            </Invitee>
          ))}
        </Members>
        <BtnContainer>
          <Button $save="true">저장</Button>
        </BtnContainer>
      </Container>
    </div>
  );
};

const Owner = styled.div`
  display: flex;
  width: 320px;
  height: 50px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #ecf1f7;
`;

const OwnerName = styled.div`
  display: flex;
  width: 44px;
  height: 23px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  ${({ theme }) => theme.textColor.gray[900]};
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.282px;
  margin-left: 13px;
`;

const OwnerEmail = styled.div`
  display: flex;
  width: 151px;
  height: 22px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  ${({ theme }) => theme.textColor.gray[900]};
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.282px;
`;

const OwnerValue = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  padding: 10px 12px 10px 16px;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  ${({ theme }) => theme.textColor.gray[950]};
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.282px;
`;

const BtnContainer = styled.div`
  max-width: 430px;
  min-width: 320px;
  bottom: 35px;
  position: fixed;
`;

const InviteeValue = styled.div`
  flex: 1 0 0;
  display: flex;
  padding: 10px 12px 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  ${({ theme }) => theme.textColor.gray[950]};
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.282px;
`;

const Members = styled.div``;

const Invitee = styled.div`
  display: flex;
  width: 320px;
  height: 50px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #ecf1f7;
`;

const InviteeName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 42px;
  height: 23px;
  ${({ theme }) => theme.textColor.gray[900]};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.282px;
  margin-left: 13px;
`;

const InviteeEmail = styled.div`
  display: flex;
  width: 151px;
  height: 22px;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  ${({ theme }) => theme.textColor.gray[900]};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.282px;
`;

const Container = styled.div`
  width: 360px;
  background: #fff;
  padding: 0 20px;
`;

const PageHeadline = styled.div`
  width: 100%;
  ${({ theme }) => theme.text.title2.bold}
  ${({ theme }) => theme.textColor.gray[950]};
  margin-top: 32px;
`;

const InputContainer = styled.div`
  width: 320px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const MixBox = styled.div`
  height: 40px;
  border-radius: 5px;
  background: #ecf1f7;
  display: flex;
  align-items: center;
  position: relative;
  flex-grow: 1;
  margin-right: 16px;
`;

const StyledInput = styled.input`
  height: 40px;
  border: none;
  outline: none;
  background: #ecf1f7;
  padding: 0;
  border-radius: 5px;
  width: 170px;
  padding-left: 15px;
  color: ${({ theme }) => theme.color.gray[7]};
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 142%;
`;

export default CollaboratorPage;
