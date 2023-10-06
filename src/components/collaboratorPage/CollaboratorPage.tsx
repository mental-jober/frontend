"use client";

import { styled } from "styled-components";
import Header from "@/components/common/Header";
import Button from "@/components/common/Button";
import useCustomBack from "../../../hooks/UseCustomBackHook";
import { checkEmail } from "@/lib/api/checkEmailAPI";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MemberType, useModal } from "../../../hooks/UseModalHook";
import { memberCRUD } from "@/lib/api/memberAPI";
import { useMemberCheckQuery } from "@/queries/queries";
import Owner from "./Owner";
import Invitee from "./Invitee";
import InviteForm from "./InviteForm";

const CollaboratorPage = () => {
  const { onOpenModal } = useModal();
  const [email, setEmail] = useState("");
  const [owner, setOwner] = useState<MemberType | null>(null);
  const [inviteeMember, setInviteeMember] = useState<MemberType[]>([]);
  const [auths, setAuths] = useState("");

  const { data } = useMemberCheckQuery(3);

  useEffect(() => {
    const CheckeMembers = async () => {
      try {
        const response = data;

        const realOwner = response.data.find(
          (member: MemberType) => member.auths === "OWNER",
        );

        const foundInvitees = response.data.filter(
          (member: MemberType) => member !== realOwner,
        );

        if (realOwner) {
          setOwner(realOwner);
        }

        if (foundInvitees.length > 0) {
          setInviteeMember(foundInvitees);
        }
      } catch (error) {
        console.error("멤버 조회 중 오류 발생:", error);
      }
    };
    CheckeMembers();
  }, [data]);

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

      setEmail("");
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
    <div>
      <Header />
      <Container>
        <PageHeadline>공동 작업자 추가</PageHeadline>
        <InviteForm
          onEmailChange={onEmailChange}
          onAuthsChange={onAuthsChange}
          onChangeMember={onChangeMember}
          email={email}
        />
        <Members>
          <Owner owner={owner} />
          {inviteeMember.map((invite) => (
            <Invitee
              key={invite.id}
              invite={invite}
              onChangeAuths={onChangeAuths}
            />
          ))}
        </Members>
        <BtnContainer>
          <Button $save onClick={onSaveChanges}>
            저장
          </Button>
        </BtnContainer>
      </Container>
    </div>
  );
};

const BtnContainer = styled.div`
  width: 100%;
  max-width: 430px;
  min-width: 320px;
  bottom: 35px;
  position: absolute;
  left: 0;
  padding: 0 20px;
`;

const Members = styled.div``;

const Container = styled.div`
  width: 100%;
  background: #fff;
  padding: 0 20px;
`;

const PageHeadline = styled.div`
  width: 100%;
  ${({ theme }) => theme.text.title2.bold}
  ${({ theme }) => theme.textColor.gray[950]};
  margin-top: 32px;
`;

export default CollaboratorPage;
