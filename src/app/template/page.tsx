"use client";

import Header from "@/components/common/Header";
import TemplateItem from "@/components/template/TemplateItem";
import TemplateList from "@/components/template/TemplateList";
import { styled } from "styled-components";
const TemplatePage = () => {
  return (
    <Test>
      <Header />
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
`

export default TemplatePage;
