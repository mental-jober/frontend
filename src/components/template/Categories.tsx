import { useCallback, useRef, useState } from "react";
import { styled, css } from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체",
  },
  {
    name: "recent",
    text: "최근",
  },
  {
    name: "personal",
    text: "개인",
  },
  {
    name: "company",
    text: "회사",
  },
  {
    name: "recurit",
    text: "채용",
  },
  {
    name: "contract",
    text: "계약",
  },
  {
    name: "notice",
    text: "공지",
  },
  {
    name: "etc",
    text: "기타",
  },
];

interface CategoriesProps {
  category: string;
  onSelect: (category: string) => void;
}

const Categories = ({ category, onSelect }: CategoriesProps) => {
  const [scroll, setScroll] = useState(0);
  return (
    <CategoriesBlock>
      <CategoriesList>
        {categories.map((item) => (
          <CategoryItem
            key={item.name}
            $active={category === item.name}
            onClick={() => onSelect(item.name)}
          >
            {item.text}
          </CategoryItem>
        ))}
      </CategoriesList>
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  /* width: 100%; */
  height: 40px;
  padding: 0 20px;
  height: 40px;
  overflow: scroll;
`;

const CategoriesList = styled.ul`
  width: 500px;
  display: flex;
  height: inherit;
  transform: translateX(0);
`;

const CategoryItem = styled.li<{ $active?: boolean }>`
  background: coral;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  margin-right: 30px;
  ${(props) =>
    props.$active &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.color.blue[3]};
    `}
`;

export default Categories;
