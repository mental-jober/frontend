import React, { useState, useRef, useEffect, MouseEvent } from "react";
import styled, { css } from "styled-components";

interface ArrowIconProps {
  isOpen: boolean;
}

interface items {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  items: items[];
  type?: "settings" | "changes";
  onSelect?: (value: string) => void;
}

interface DropdownContainerProps {
  type?: "settings" | "changes";
}

const CustomDropdown = ({ items, type, onSelect }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onClickOutside = (e: globalThis.MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const onSelectItem = (label: string) => {
    if (onSelect) {
      onSelect(label);
    }
    setSelectedItem(label);
    setIsOpen(false);
  };
  return (
    <DropdownContainer ref={dropdownRef} type={type}>
      <DropdownHeader onClick={toggleDropdown} type={type}>
        {selectedItem || "선택"}
        <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
      </DropdownHeader>
      {isOpen && (
        <DropdownList type={type}>
          {items.map((item) => (
            <DropdownItem
              key={item.value}
              onClick={() => onSelectItem(item.label)}
              type={type}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div<DropdownContainerProps>`
  position: relative;
  height: 18px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
  width: 100%;
  color: #343940;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
  margin-right: 10px;

  ${(props) =>
    props.type === "changes" &&
    css`
      height: 30px;
      gap: 4px;
      letter-spacing: -0.282px;
      margin-right: 5px;
    `}
`;

const DropdownHeader = styled.div<DropdownContainerProps>`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.22px;

  ${(props) =>
    props.type === "changes" &&
    css`
      color: #343940;
      text-align: center;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
    `}
`;

const ArrowIcon = styled.div<ArrowIconProps>`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownList = styled.div<DropdownContainerProps>`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  z-index: 10;

  ${(props) => props.type === "changes" && css``}
`;

const DropdownItem = styled.div<DropdownContainerProps>`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;

    ${(props) => props.type === "changes" && css``}
  }
`;

export default CustomDropdown;
