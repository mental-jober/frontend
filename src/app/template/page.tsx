"use client";

import Header from "@/components/common/Header";
import Categories from "@/components/template/Categories";
import CreateTemplate from "@/components/template/CreateTemplate";
import Search from "@/components/template/Search";
import TabList from "@/components/template/TabList";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateList from "@/components/template/TemplateList";
import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
const TemplatePage = () => {
  const [category, setCategory] = useState("all");
  const [tab, setTab] = useState("collection");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  const onSelectTab = useCallback((tabItem: string) => setTab(tabItem), []);
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Test>
      <HeaderBlock className={scroll ? "scrolled" : ""}>
        <Header />
        <TabList tab={tab} onSelectTab={onSelectTab} />
        {tab === "collection" ? (
          <>
            <Categories category={category} onSelect={onSelect} />
            <Search />
          </>
        ) : (
          <CreateTemplate />
        )}
      </HeaderBlock>
      {tab === "collection" ? <HeaderMargin /> : <MyTemplateMargin />}
      <TemplateList>
        <TemplateItem />
        <TemplateItem />
        <TemplateItem />
        <TemplateItem />
      </TemplateList>
    </Test>
  );
};

const Test = styled.div`
  height: 100vh;
`;

const HeaderBlock = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 430px;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: box-shadow 0.3s ease-in-out;
  padding-bottom: 20px;
  &.scrolled {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

const HeaderMargin = styled.div`
  margin-top: 190px;
`;

const MyTemplateMargin = styled.div`
  margin-top: 150px;
`;

export default TemplatePage;
