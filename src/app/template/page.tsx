"use client";

import Categories from "@/components/template/Categories";
import CreateTemplate from "@/components/template/CreateTemplate";
import Search from "@/components/template/Search";
import TabList from "@/components/template/TabList";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateList from "@/components/template/TemplateList";
import {
  getFavorite,
  getTemplate,
  getTemplateAll,
} from "@/lib/api/templateAPI";
import { useCallback, useEffect, useState } from "react";
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
  const [allData, setAllData] = useState([]);
  const [personData, setPersonData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [survayData, setSurvayData] = useState([]);
  const [contractData, setContractData] = useState([]);
  const [lawData, setLawData] = useState([]);
  const [myTemp, setMyTemp] = useState([]);

  // Function
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const fetchTempAllData = useCallback(async () => {
    await getTemplateAll().then((res) => {
      console.log("템플릿 모음:", res.data.content);
      setAllData(res.data.content);
    });
  }, []);

  const fetchPersonData = useCallback(async () => {
    await getTemplate("개인").then((res) => {
      console.log("개인:", res.data.content);
      setPersonData(res.data.content);
    });
  }, []);

  const fetchCompanyData = useCallback(async () => {
    await getTemplate("회사").then((res) => {
      console.log("회사:", res.data.content);
      setCompanyData(res.data.content);
    });
  }, []);

  const fetchSurvayData = useCallback(async () => {
    await getTemplate("설문").then((res) => {
      console.log("설문:", res.data.content);
      setSurvayData(res.data.content);
    });
  }, []);

  const fetchContractData = useCallback(async () => {
    await getTemplate("계약").then((res) => {
      console.log("계약:", res.data.content);
      setContractData(res.data.content);
    });
  }, []);

  const fetchLawData = useCallback(async () => {
    await getTemplate("법률").then((res) => {
      console.log("법률:", res.data.content);
      setLawData(res.data.content);
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
    fetchTempAllData();
    return () => {
      fetchTempAllData();
    };
  }, [fetchTempAllData]);

  useEffect(() => {
    fetchPersonData();
    return () => {
      fetchPersonData();
    };
  }, [fetchPersonData]);

  useEffect(() => {
    fetchCompanyData();
    return () => {
      fetchCompanyData();
    };
  }, [fetchCompanyData]);

  useEffect(() => {
    fetchSurvayData();
    return () => {
      fetchSurvayData();
    };
  }, [fetchSurvayData]);

  useEffect(() => {
    fetchContractData();
    return () => {
      fetchContractData();
    };
  }, [fetchContractData]);

  useEffect(() => {
    fetchLawData();
    return () => {
      fetchLawData();
    };
  }, [fetchLawData]);

  useEffect(() => {
    fetchMyTempData();
    return () => {
      fetchMyTempData();
    };
  }, [fetchMyTempData]);

  // Render
  return (
    <>
      <HeaderBlock className={scroll ? "scrolled" : ""}>
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
          ? category === "all"
            ? allData.map((item: Data) => (
                <TemplateItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  hashtags={item.hashtags}
                  id={item.id}
                />
              ))
            : category === "personal"
            ? personData.map((item: Data) => (
                <TemplateItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  hashtags={item.hashtags}
                  id={item.id}
                />
              ))
            : category === "company"
            ? companyData.map((item: Data) => (
                <TemplateItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  hashtags={item.hashtags}
                  id={item.id}
                />
              ))
            : category === "survay"
            ? survayData.map((item: Data) => (
                <TemplateItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  hashtags={item.hashtags}
                  id={item.id}
                />
              ))
            : category === "contract"
            ? contractData.map((item: Data) => (
                <TemplateItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  hashtags={item.hashtags}
                  id={item.id}
                />
              ))
            : category === "law" &&
              lawData.map((item: Data) => (
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
