"use client";

import React, { useState } from "react";
import EditorToolbar, {
  modules,
  formats,
} from "@/components/editor/text-editor";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Editor = () => {
  const [text, setText] = useState("");

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={text}
        onChange={setText}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
