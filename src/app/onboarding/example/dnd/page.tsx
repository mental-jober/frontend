"use client";
import DndPage from "@/components/pageLayout/DndPage";
import React, { useEffect, useState } from "react";

const Hamburger = () => {
  const [winReady, setWinReady] = useState(false);
  useEffect(() => {
    setWinReady(true);
  }, []);

  return <>{winReady ? <DndPage /> : null}</>;
};

export default Hamburger;
