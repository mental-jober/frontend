"use client";

import { styled } from "styled-components";
import Header from "@/components/common/Header";
import Button from "@/components/common/Button";
import CustomDropdown from "./CustomDropdown";
import useCustomBack from "../../../hooks/UseCustomBackHook";
import { checkEmail } from "@/lib/api/checkEmailAPI";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MemberType, useModal } from "../../../hooks/UseModalHook";
import { checkMembers, memberCRUD } from "@/lib/api/memberAPI";

const CollaboratorPage = () => {
  const { onOpenModal } = useModal();
  const [email, setEmail] = useState("");
  const [owner, setOwner] = useState<MemberType | null>(null);
  const [inviteeMember, setInviteeMember] = useState<MemberType[]>([]);
  const [auths, setAuths] = useState("");

  const settings = [
    { value: "EDITOR", label: "편집자" },
    { value: "VIEWER", label: "뷰어" },
  ];

  const changes = [
    { value: "EDITOR", label: "편집자" },
    { value: "VIEWER", label: "뷰어" },
    { value: "DELETE", label: "삭제" },
  ];

  useEffect(() => {
    const CheckeMembers = async () => {
      try {
        const response = await checkMembers(3);

        let foundOwner: MemberType | null = null;
        const foundInvitees: MemberType[] = [];

        response.data.forEach((member: MemberType) => {
          if (member.auths === "OWNER" && foundOwner === null) {
            foundOwner = member;
          } else {
            foundInvitees.push(member);
          }
        });

        if (foundOwner) {
          setOwner(foundOwner);
        }

        if (foundInvitees) {
          setInviteeMember(foundInvitees);
        }
      } catch (error) {
        console.error("멤버 조회 중 오류 발생:", error);
      }
    };
    CheckeMembers();
  }, []);

  useCustomBack(() => {
    onOpenModal("ExitPage");
  });

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onAuthsChange = (selectedAuths: string) => {
    setAuths(selectedAuths);
  };

  const updateMembers = async (newMember?: {
    email: string;
    auths: string;
  }) => {
    try {
      const allMembers = [
        ...inviteeMember.map((member) => ({
          email: member.email,
          auths: member.auths,
        })),
      ];

      if (newMember) {
        allMembers.push(newMember);
      }

      if (owner) {
        allMembers.push({ email: owner.email, auths: owner.auths });
      }

      await memberCRUD(3, allMembers);
    } catch (error) {
      console.error("멤버 정보 업데이트 중 오류 발생:", error);
    }
  };

  const onChangeMember = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await checkEmail(email);

      if (response === false) {
        setEmail("");
        onOpenModal("NotFoundMember");
        return;
      }

      if (response === true) {
        await updateMembers({ email, auths });
      }
    } catch (error) {
      console.error("멤버 정보 변경 중 오류 발생:", error);
    }
  };

  const onSaveChanges = async () => {
    await updateMembers();
  };

  const onDelete = (vlaue: string, deleteUsername: string) => {
    if (vlaue === "DELETE") {
      const modalData = {
        onDeleteConfirm: () => {
          setInviteeMember((members) => {
            const updatedInviteeMembers = members.filter(
              (member) => member.username !== deleteUsername,
            );
            return updatedInviteeMembers;
          });
        },
      };
      onOpenModal("DeletePermission", modalData);
    }
  };

  const onChangeAuths = (value: string, username: string) => {
    if (value === "DELETE") {
      onDelete(value, username);
    } else {
      setInviteeMember((members) => {
        const updatedMembers = members.map((member) => {
          if (member.username === username) {
            return {
              ...member,
              auths: value,
            };
          }
          return member;
        });
        return updatedMembers;
      });
    }
  };

  return (
    <div className="">
      <Header />
      <Container>
        <PageHeadline>공동 작업자 추가</PageHeadline>
        <form onSubmit={onChangeMember}>
          <InputContainer>
            <MixBox>
              <StyledInput
                type="text"
                placeholder="Email(자버계정)"
                value={email}
                onChange={onEmailChange}
                required
              />
              <CustomDropdown
                items={settings}
                type="settings"
                onSelect={onAuthsChange}
              />
            </MixBox>

            <Button $invitebtn="true" type="submit">
              초대
            </Button>
          </InputContainer>
        </form>
        <Members>
          <Owner>
            {owner && (
              <>
                <OwnerName> {owner.username}</OwnerName>
                <OwnerEmail>{owner.email}</OwnerEmail>
                <OwnerValue>{owner.auths === "OWNER" && "소유자"}</OwnerValue>
              </>
            )}
          </Owner>
          {inviteeMember.map((invite) => (
            <Invitee key={invite.id}>
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
            </Invitee>
          ))}
        </Members>
        <BtnContainer>
          <Button $save="true" onClick={onSaveChanges}>
            저장
          </Button>
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
