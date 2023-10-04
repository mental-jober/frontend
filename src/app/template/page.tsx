"use client";

import Header from "@/components/common/Header";
import Categories from "@/components/template/Categories";
import CreateTemplate from "@/components/template/CreateTemplate";
import Search from "@/components/template/Search";
import TabList from "@/components/template/TabList";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateList from "@/components/template/TemplateList";
import { getFavorite, getTemplate } from "@/lib/api/templateAPI";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";

export interface Data {
  title: string;
  id: number;
  description: string;
  hashtags: string[];
  thumbnailUrl?: null;
}

const TemplatePage = () => {
  // State
  const [category, setCategory] = useState("all");
  const [tab, setTab] = useState("collection");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  const onSelectTab = useCallback((tabItem: string) => setTab(tabItem), []);
  const [scroll, setScroll] = useState(false);
  const [data, setData] = useState([]);
  const [myTemp, setMyTemp] = useState([]);

  // Function
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const fetchTempData = useCallback(async () => {
    await getTemplate().then((res) => {
      console.log("템플릿 모음:", res.data.content);
      setData(res.data.content);
    });
  }, []);

  const fetchMyTempData = useCallback(async () => {
    await getFavorite().then((res) => {
      console.log("내 템플릿:", res.data.content);
      setMyTemp(res.data.content);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    fetchTempData();
    return () => {
      fetchTempData();
    };
  }, [fetchTempData]);

  useEffect(() => {
    fetchMyTempData();
    return () => {
      fetchMyTempData();
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
        {tab === "collection"
          ? category === "all" &&
            data.map((item: Data) => (
              <TemplateItem
                key={item.id}
                title={item.title}
                description={item.description}
                hashtags={item.hashtags}
                id={item.id}
              />
            ))
          : myTemp.map((item: Data) => (
              <TemplateItem
                key={item.id}
                title={item.title}
                description={item.description}
                hashtags={item.hashtags}
                id={item.id}
              />
            ))}
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
