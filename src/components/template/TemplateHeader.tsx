import { styled } from "styled-components";
import Header from "../common/Header";
import TabList from "./TabList";
import Categories from "./Categories";
import Search from "./Search";
import CreateTemplate from "./CreateTemplate";
import { ChangeEvent } from "react";

interface TemplateHeaderProps {
  scroll: boolean;
  tab: string;
  onSelectTab: (tabItem: string) => void;
  keyword: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  category: string;
  onSelect: (category: string) => void;
}

const TemplateHeader = ({
  keyword,
  onSearchChange,
  tab,
  scroll,
  onSelectTab,
  category,
  onSelect,
}: TemplateHeaderProps) => {
  return (
    <>
      <HeaderBlock className={scroll ? "scrolled" : ""}>
        <Header />
        <TabList tab={tab} onSelectTab={onSelectTab} />
        {tab === "/template" ? (
          <>
            <Categories category={category} onSelect={onSelect} />
            <Search
              onSearchChange={onSearchChange}
              keyword={keyword}
            />
          </>
        ) : (
          <CreateTemplate />
        )}
      </HeaderBlock>
      {tab === "/template" ? <HeaderMargin /> : <MyTemplateMargin />}
    </>
  );
};

const HeaderBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 9999;
  padding-bottom: 20px;
  &.scrolled {
    border-bottom: 2px solid #eee;
  }
`;

const HeaderMargin = styled.div`
  margin-top: 190px;
`;

const MyTemplateMargin = styled.div`
  margin-top: 150px;
`;

export default TemplateHeader;
