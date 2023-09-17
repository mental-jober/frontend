import { styled } from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { useCallback, useEffect, useRef, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HeaderBlock className={scroll ? "scrolled" : ""}>
      <HeaderContent>
        <GrFormPrevious />
      </HeaderContent>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  height: 58px;
  background: coral;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: box-shadow 0.3s ease-in-out;
  svg {
    cursor: pointer;
    font-size: 30px;
  }
  &.scrolled {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const HeaderContent = styled.div`
  background: #fff;
  width: 100%;
`;

export default Header;
