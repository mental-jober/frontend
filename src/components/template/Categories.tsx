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
  return (
    <CategoriesBlock>
      {categories.map((item) => (
        <Category
          key={item.name}
          $active={category === item.name}
          onClick={() => onSelect(item.name)}
        >
          {item.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  width: 100%;
  height: 37px;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const Category = styled.div<{ $active?: boolean }>`
  height: inherit;
  line-height: 40px;
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
