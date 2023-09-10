"use client";

import dynamic from "next/dynamic";

const FroalaEditor = dynamic(() => import("./FroalaSetup"), {
  loading: () => <p>에디터를 불러오는 중...</p>,
  ssr: false,
});

function TextEditor() {
  return (
    <div className="w-[354px] h-[434px]">
      <FroalaEditor />
    </div>
  );
}

export default TextEditor;
