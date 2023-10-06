import { styled } from "styled-components";
import CustomDropdown from "./CustomDropdown";
import { MemberType } from "../../../hooks/UseModalHook";
import { changes } from "@/lib/constants";

interface InviteeProps {
  invite: MemberType;
  onChangeAuths: (value: string, username: string) => void;
}

const Invitee = ({ invite, onChangeAuths }: InviteeProps) => {
  return (
    <>
      <StyledInvitee key={invite.id}>
        <InviteeName>{invite.username}</InviteeName>
        <InviteeEmail>{invite.email}</InviteeEmail>
        <InviteeValue>
          <CustomDropdown
            items={changes}
            type="changes"
            onSelect={(value) => onChangeAuths(value, invite.username)}
            initialValue={
              invite.auths === "OWNER"
                ? "소유자"
                : invite.auths === "EDITOR"
                ? "편집자"
                : invite.auths === "VIEWER"
                ? "뷰어"
                : "선택"
            }
          />
        </InviteeValue>
      </StyledInvitee>
    </>
  );
};

const StyledInvitee = styled.div`
  display: flex;
  width: 100%;
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

export default Invitee;
