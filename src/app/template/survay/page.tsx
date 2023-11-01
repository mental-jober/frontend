"use client";

import { getTemplate, searchTemplate } from "@/lib/api/templateAPI";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Data } from "../page";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateHeader from "@/components/template/TemplateHeader";
import TemplateList from "@/components/template/TemplateList";

const TemplateSurvayPage = () => {
  const [category, setCategory] = useState("/template/survay");
  const [tab, setTab] = useState("/template");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  const onSelectTab = useCallback((tabItem: string) => setTab(tabItem), []);
  const [scroll, setScroll] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [survayData, setSurvayData] = useState([]);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const fetchSurvayData = useCallback(async () => {
    await getTemplate("개인").then((res) => {
      console.log(res.data.content);
      setSurvayData(res.data.content);
    });
  }, []);

  const fetchSearchData = useCallback(async () => {
    setSearch(true);
    searchTemplate(keyword).then((res) => {
      console.log(res.data.content);
      setSearchData(res.data.content);
    });
  }, [keyword]);

  const onSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    fetchSurvayData();
    return () => {
      fetchSurvayData();
    };
  }, [fetchSurvayData]);

  useEffect(() => {
    fetchSearchData();
    return () => {
      fetchSearchData();
    };
  }, [fetchSearchData]);

  return (
    <>
      <TemplateHeader
        tab={tab}
        keyword={keyword}
        onSearchChange={onSearchChange}
        scroll={scroll}
        onSelectTab={onSelectTab}
        category={category}
        onSelect={onSelect}
      />
      <TemplateList>
        {search
          ? searchData.map((item: Data) => (
              <TemplateItem
                key={item.id}
                title={item.title}
                description={item.description}
                hashtags={item.hashtags}
                id={item.id}
              />
            ))
          : survayData.map((item: Data) => (
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

export default TemplateSurvayPage;
