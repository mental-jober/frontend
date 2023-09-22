"use client";

import { useToastStore } from "@/lib/store/store.module";
import { useEffect } from "react";
import Toast from "./Toast";

const ToastUi = () => {
  const { message, hideToast } = useToastStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(hideToast, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, hideToast]);

  return <>{message && <Toast message={message} />}</>;
};

export default ToastUi;
