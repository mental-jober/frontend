"use client";

import { getTemplate, searchTemplate } from "@/lib/api/templateAPI";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Data } from "../page";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateHeader from "@/components/template/TemplateHeader";
import TemplateList from "@/components/template/TemplateList";

const TemplateContractPage = () => {
  const [category, setCategory] = useState("/template/law");
  const [tab, setTab] = useState("/template");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  const onSelectTab = useCallback((tabItem: string) => setTab(tabItem), []);
  const [scroll, setScroll] = useState(false);
  const [lawData, setLawData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const onSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  const fetchLawData = useCallback(async () => {
    await getTemplate("법률").then((res) => {
      console.log("법률:", res.data.content);
      setLawData(res.data.content);
    });
  }, []);

  const fetchSearchData = useCallback(async () => {
    setSearch(true);
    searchTemplate(keyword).then((res) => {
      console.log(res.data.content);
      setSearchData(res.data.content);
    });
  }, [keyword]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    fetchLawData();
    return () => {
      fetchLawData();
    };
  }, [fetchLawData]);

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
          : lawData.map((item: Data) => (
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

export default TemplateContractPage;
