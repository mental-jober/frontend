import Link from "next/link";
import { styled, css } from "styled-components";

// Data(임시)
const categories = [
  {
    name: "all",
    text: "전체",
    query: "/template",
  },
  {
    name: "personal",
    text: "개인",
    query: "/template/person",
  },
  {
    name: "company",
    text: "회사",
    query: "/template/company",
  },
  {
    name: "survay",
    text: "설문",
    query: "/template/survay",
  },
  {
    name: "contract",
    text: "계약",
    query: "/template/contract",
  },
  {
    name: "law",
    text: "법률",
    query: "/template/law",
  },
];

// Interface & Type
interface CategoriesProps {
  category: string;
  onSelect: (category: string) => void;
}

// Component
const Categories = ({ category, onSelect }: CategoriesProps) => {
  // Render
  return (
    <CategoriesBlock>
      <CategoriesList>
        {categories.map((item) => (
          <CategoryItem
            key={item.name}
            $active={category === item.query}
            onClick={() => onSelect(item.name)}
            href={item.query}
          >
            {item.text}
          </CategoryItem>
        ))}
      </CategoriesList>
    </CategoriesBlock>
  );
};

// Style
const CategoriesBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  padding: 0 20px;
  height: 50px;
`;

const CategoriesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

const CategoryItem = styled(Link)<{ $active?: boolean }>`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  ${(props) =>
    props.$active &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.color.blue[3]};
    `}
`;

export default Categories;
