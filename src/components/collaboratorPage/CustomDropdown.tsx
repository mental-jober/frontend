import React, { useState, useRef, useEffect, MouseEvent } from "react";
import styled, { css } from "styled-components";

interface items {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  items: items[];
  type?: "settings" | "changes";
  onSelect?: (label: string) => void;
  initialValue?: string | null;
}

interface DropdownContainerProps {
  type?: "settings" | "changes";
}

const CustomDropdown = ({
  items,
  type,
  onSelect,
  initialValue = null,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(initialValue);
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

  const onSelectItem = (value: string, label: string) => {
    if (onSelect) {
      onSelect(value);
    }
    setSelectedItem(label);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={dropdownRef} type={type}>
      <DropdownHeader onClick={toggleDropdown} type={type}>
        {selectedItem || "선택"}
        {isOpen ? <ArrowIconOpen>▼</ArrowIconOpen> : <ArrowIcon>▼</ArrowIcon>}
      </DropdownHeader>
      {isOpen && (
        <DropdownList type={type}>
          {items.map((item) => (
            <DropdownItem
              key={item.value}
              onClick={() => onSelectItem(item.value, item.label)}
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
const ArrowIcon = styled.div`
  transform: rotate(0deg);
`;

const ArrowIconOpen = styled.div`
  transform: rotate(180deg);
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
