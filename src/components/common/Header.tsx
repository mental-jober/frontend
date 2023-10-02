import { styled } from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { useRouter, usePathname } from "next/navigation";
import { useModal } from "../../../hooks/UseModalHook";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { onOpenModal } = useModal();

  const handleBack = () => {
    if (pathname === "/space/textEdit") {
      onOpenModal("ExitPage");
    } else {
      router.back();
    }
  };

  return (
    <>
      <HeaderBlock>
        <HeaderContent>
          <GrFormPrevious onClick={handleBack} />
        </HeaderContent>
      </HeaderBlock>
    </>
  );
};

const HeaderBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  height: 58px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    font-size: 30px;
  }
`;

const HeaderContent = styled.div`
  background: #fff;
  width: 100%;
`;

export default Header;
