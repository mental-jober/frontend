import { styled } from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useModal } from "../../../hooks/UseModalHook";
import SpaceEditHeader from "../spaceLayout/SpaceEditHeader";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();
  const { onOpenModal } = useModal();
  const { id, contId } = useParams();

  const handleBack = () => {
    if (
      pathname === `/space/${id}/edit/${contId}/textEdit` ||
      `/space/${id}/edit/profileEdit`
    ) {
      onOpenModal("ExitPage");
    } else {
      router.back();
    }
  };

  const renderHeader = () => {
    if (pathname === `/space/${id}/edit`) {
      return <SpaceEditHeader />;
    }
    return <GrFormPrevious onClick={handleBack} />;
  };

  return (
    <>
      {pathname === "/" || pathname === "/auth/login" ? null : (
        <HeaderBlock>
          <HeaderContent>{renderHeader()}</HeaderContent>
        </HeaderBlock>
      )}
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
  position: sticky;
  top: 0;
  z-index: 9998;
  svg {
    cursor: pointer;
    font-size: 30px;
  }
  background-color: #fff;
`;

const HeaderContent = styled.div`
  background: #fff;
  width: 100%;
`;

export default Header;
