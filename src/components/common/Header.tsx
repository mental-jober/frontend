import { styled } from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <HeaderBlock>
      <HeaderContent>
        <GrFormPrevious onClick={() => router.back()} />
      </HeaderContent>
    </HeaderBlock>
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
