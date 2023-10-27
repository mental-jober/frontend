"use client";

import TemplateHeader from "@/components/template/TemplateHeader";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateList from "@/components/template/TemplateList";
import { getFavorite } from "@/lib/api/templateAPI";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export interface Data {
  title: string;
  id: number;
  description: string;
  hashtags: string[];
  thumbnailUrl?: null;
}

const MyTemplatePage = () => {
  // State
  const [category, setCategory] = useState("/template");
  const [tab, setTab] = useState("/template/my-template");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  const onSelectTab = useCallback((tabItem: string) => setTab(tabItem), []);
  const [scroll, setScroll] = useState(false);
  const [myTemp, setMyTemp] = useState([]);

  // search test
  const [keyword, setKeyword] = useState("");

  const onSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  // Function
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

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
    fetchMyTempData();
    return () => {
      fetchMyTempData();
    };
  }, [fetchMyTempData]);

  // Render
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
        {myTemp.map((item: Data) => (
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

export default MyTemplatePage;
