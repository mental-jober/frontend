import { styled } from "styled-components";
import { MemberType } from "../../../hooks/UseModalHook";

interface ownerProps {
  owner: MemberType | null;
}

const Owner = ({ owner }: ownerProps) => {
  return (
    <>
      <StyledOwner>
        {owner && (
          <>
            <OwnerName> {owner.username}</OwnerName>
            <OwnerEmail>{owner.email}</OwnerEmail>
            <OwnerValue>{owner.auths === "OWNER" && "소유자"}</OwnerValue>
          </>
        )}
      </StyledOwner>
    </>
  );
};

const StyledOwner = styled.div`
  display: flex;
  width: 100%;
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
  margin-right: 20px;
  justify-content: end;
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

export default Owner;
