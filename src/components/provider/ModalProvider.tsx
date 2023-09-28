"use client";

import { useEffect, useState } from "react";
import NotFoundMemberModal from "../modal/NotFoundMemberModal";
import ExitPageModal from "../modal/ExitPageModal";
import DeletePermissonModal from "../modal/DeletePermissonModal";
import AddLinkModal from "../modal/AddLinkModal";
import LogoutModal from "../modal/LogoutModal";
import DeletePageModal from "../modal/DeletePageModal";
import GetLayoutModal from "../modal/GetLayoutModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NotFoundMemberModal />
      <ExitPageModal />
      <DeletePermissonModal />
      <AddLinkModal />
      <LogoutModal />
      <DeletePageModal />
      <GetLayoutModal />
    </>
  );
};
