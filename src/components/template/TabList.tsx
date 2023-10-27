import Link from "next/link";
import { css, styled } from "styled-components";

const list = [
  {
    name: "collection",
    text: "템플릿 모음",
    query: "/template",
  },
  {
    name: "myTemplate",
    text: "내 템플릿",
    query: "/template/my-template",
  },
];

interface TabListProps {
  tab: string;
  onSelectTab: (tabItem: string) => void;
}

const TabList = ({ tab, onSelectTab }: TabListProps) => {
  return (
    <TabBlock>
      {list.map((item) => (
        <TabItem
          key={item.name}
          $active={tab === item.query}
          onClick={() => onSelectTab(item.name)}
          href={item.query}
        >
          {item.text}
        </TabItem>
      ))}
    </TabBlock>
  );
};

const TabBlock = styled.div`
  width: 100%;
  height: 58px;
  min-width: 360px;
  max-width: 430px;
  display: flex;
  justify-content: space-between;
`;

const TabItem = styled(Link)<{ $active: boolean }>`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  ${(props) =>
    props.$active &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.color.blue[3]};
      border-bottom: 3px solid ${({ theme }) => theme.color.blue[3]};
    `}
`;

export default TabList;
