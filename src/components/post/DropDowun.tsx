import React, { useState } from "react";
import styled from "styled-components";

interface DropdownMenuProps {
  items: { id: number; label: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>메뉴</DropdownButton>
      {isOpen && (
        <DropdownList>
          {items.map((item) => (
            <DropdownItem key={item.id}>{item.label}</DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 200px;
  position: relative;
  display: flex;
  width: 200px;
  padding: 10px var(--space-2, 8px) 10px var(--space-3, 12px);
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default DropdownMenu;
