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
  // State
  const [category, setCategory] = useState("all");
  const [tab, setTab] = useState("collection");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  const onSelectTab = useCallback((tabItem: string) => setTab(tabItem), []);
  const [scroll, setScroll] = useState(false);

  // Function
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

  // Render
  return (
    <>
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

export default TemplatePage;
