import { MouseEvent, useCallback, useRef, useState } from "react";
import { styled, css } from "styled-components";

// Data(임시)
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

// Interface & Type
interface CategoriesProps {
  category: string;
  onSelect: (category: string) => void;
}

// Component
const Categories = ({ category, onSelect }: CategoriesProps) => {
  // State
  const [isDrag, setIsDrag] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [clickPoint, setClickPoint] = useState(0);

  // Reference
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function
  const onMouseDown = useCallback((event: MouseEvent) => {
    setIsDrag(true);
    if (scrollRef.current) {
      setClickPoint(event.pageX);
      setScroll(scrollRef.current.scrollLeft);
    }
  }, []);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDrag) return;
      event.preventDefault();
      if (scrollRef.current) {
        const move = event.pageX - clickPoint;
        scrollRef.current.scrollLeft = scroll - move;
      }
    },
    [isDrag, clickPoint, scroll],
  );

  // Render
  return (
    <CategoriesBlock
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={() => setIsDrag(false)}
      onMouseUp={() => setIsDrag(false)}
      onMouseMove={onMouseMove}
    >
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
  height: 40px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoriesList = styled.ul`
  width: 570px;
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
