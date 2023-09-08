"use client";

import { PiArrowArcLeftBold, PiArrowArcRightBold } from "react-icons/pi";
import { ToolbarButton, ToolbarUndoRedo } from "./toolbar-button";

interface QuillInstance {
  quill: {
    history: {
      undo: () => void;
      redo: () => void;
    };
  };
}

function undoChange(this: QuillInstance) {
  this.quill.history.undo();
}
function redoChange(this: QuillInstance) {
  this.quill.history.redo();
}

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const EditorToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-size" defaultValue="medium">
        <option value="large">크게</option>
        <option value="medium">중간</option>
        <option value="small">작게</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">제목 1</option>
        <option value="2">제목 2</option>
        <option value="3">보통</option>
      </select>
    </span>
    <span className="ql-formats">
      <ToolbarButton tooltipLabel="굵게(crtl+b)" className="ql-bold" />
      <ToolbarButton tooltipLabel="기울임꼴(ctrl+i)" className="ql-italic" />
      <ToolbarButton tooltipLabel="밑줄(ctrl+u)" className="ql-underline" />
      <ToolbarButton tooltipLabel="밑줄(ctrl+s)" className="ql-strike" />
    </span>
    <span className="ql-formats">
      <ToolbarButton
        tooltipLabel="숫자형 리스트"
        className="ql-list"
        value="ordered"
      />
      <ToolbarButton
        tooltipLabel="기호형 리스트"
        className="ql-list"
        value="bullet"
      />
      <ToolbarButton tooltipLabel="내어쓰기" className="ql-indent" value="-1" />
      <ToolbarButton tooltipLabel="들여쓰기" className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <ToolbarButton tooltipLabel="인용" className="ql-blockquote" />
    </span>
    <span className="ql-formats">
      <ToolbarButton tooltipLabel="정렬" className="ql-align" />
      <ToolbarButton tooltipLabel="글자 색상" className="ql-color" />
      <ToolbarButton tooltipLabel="배경 색상" className="ql-background" />
    </span>
    <span className="ql-formats">
      <ToolbarButton tooltipLabel="링크" className="ql-link" />
      <ToolbarButton tooltipLabel="이미지" className="ql-image" />
      <ToolbarButton tooltipLabel="동영상" className="ql-video" />
    </span>
    <span className="ql-formats">
      <ToolbarButton tooltipLabel="코드" className="ql-code-block" />
    </span>
    <span className="ql-formats">
      <ToolbarUndoRedo tooltipLabel="실행 취소" className="ql-undo">
        <PiArrowArcLeftBold />
      </ToolbarUndoRedo>

      <ToolbarUndoRedo tooltipLabel="다시 실행" className="ql-redo">
        <PiArrowArcRightBold />
      </ToolbarUndoRedo>
    </span>
  </div>
);

export default EditorToolbar;
