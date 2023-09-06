"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import styled from "styled-components";

const Home = () => {
  return (
    <Test>
      <Trigger asChild>
        <button>Trigger</button>
      </Trigger>
      <ModalContent className="sm:max-w-[300px]">
        <Header>짜잔</Header>
        <Description>히힛</Description>
      </ModalContent>
    </Test>
  );
};

const Test = styled(Dialog)`
  width: 100%;
  height: 100vh;
  background: coral;
`;

const Trigger = styled(DialogTrigger)`
  /* padding: 20px; */
  background: coral;
  &:hover {
    background: ${(props) => props.theme.background};
  }
`;

const ModalContent = styled(DialogContent)``;

const Header = styled(DialogHeader)``;

const Description = styled(DialogDescription)``;

export default Home;
