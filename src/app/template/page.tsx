"use client";

import Header from "@/components/common/Header";
import Categories from "@/components/template/Categories";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateList from "@/components/template/TemplateList";
import { useCallback, useState } from "react";
import { styled } from "styled-components";
const TemplatePage = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category: string) => setCategory(category), []);
  return (
    <Test>
      <Header />
      <Categories category={category} onSelect={onSelect} />
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

export default TemplatePage;
