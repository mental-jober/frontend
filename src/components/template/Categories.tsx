import { styled, css } from "styled-components";

// Data(임시)
const categories = [
  {
    name: "all",
    text: "전체",
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
    name: "survay",
    text: "설문",
  },
  {
    name: "contract",
    text: "계약",
  },
  {
    name: "law",
    text: "법률",
  },
];

// Interface & Type
interface CategoriesProps {
  category: string;
  onSelect: (category: string) => void;
}

// Component
// TODO: 스크롤 이벤트 제거
const Categories = ({ category, onSelect }: CategoriesProps) => {
  // Render
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

// Style
const CategoriesBlock = styled.div`
  height: 40px;
  padding: 0 20px;
  height: 50px;
`;

const CategoriesList = styled.ul`
  width: 430px;
  display: flex;
  height: inherit;
  transform: translateX(0);
`;

const CategoryItem = styled.li<{ $active?: boolean }>`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  margin-right: 40px;
  ${(props) =>
    props.$active &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.color.blue[3]};
    `}
`;

export default Categories;
