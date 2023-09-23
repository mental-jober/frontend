import React, { useState, useRef } from "react";
import styled from "styled-components";

interface ArrowIconProps {
  isOpen: boolean;
}

const items = [
  { id: 1, label: "편집자" },
  { id: 2, label: "뷰어" },
];

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (label: string | null) => {
    setSelectedItem(label);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedItem || "선택"}
        <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {items.map((item) => (
            <DropdownItem
              key={item.id}
              onClick={() => handleSelectItem(item.label)}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  height: 18px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
  width: 50px;
  color: #343940;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  margin-right: 10px;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 8px;
`;

const ArrowIcon = styled.div<ArrowIconProps>`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;

export default CustomDropdown;
