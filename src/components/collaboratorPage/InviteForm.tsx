"use client";

import { styled } from "styled-components";
import CustomDropdown from "./CustomDropdown";
import { settings } from "@/lib/constants";
import Button from "../common/Button";
import { ChangeEvent, FormEvent } from "react";

interface InviteFormProps {
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAuthsChange: (selectedAuths: string) => void;
  onChangeMember: (e: FormEvent) => Promise<void>;
  email: string;
}

const InviteForm = ({
  onEmailChange,
  onAuthsChange,
  onChangeMember,
  email,
}: InviteFormProps) => {
  return (
    <>
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

          <Button $invitebtn type="submit">
            초대
          </Button>
        </InputContainer>
      </form>
    </>
  );
};

const InputContainer = styled.div`
  width: 100%;
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

export default InviteForm;
