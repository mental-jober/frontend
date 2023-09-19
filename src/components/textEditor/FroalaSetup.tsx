import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/languages/ko";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import React from "react";
import { froalaEditorStore } from "@/lib/store/store.module";

const FroalaSetup = () => {
  const { text, setText } = froalaEditorStore();

  const config = {
    placeholderText: "내용을 입력하세요.",
    toolbarButtons: {
      moreText: {
        buttons: [
          "bold",
          "italic",
          "underline",
          "strikeThrough",
          "subscript",
          "superscript",
          "fontFamily",
          "fontSize",
          "textColor",
          "backgroundColor",
          "inlineClass",
          "inlineStyle",
          "clearFormatting",
        ],
      },
      moreParagraph: {
        buttons: [
          "alignLeft",
          "alignCenter",
          "alignRight",
          "formatOLSimple",
          "alignJustify",
          "formatOL",
          "formatUL",
          "paragraphFormat",
          "paragraphStyle",
          "lineHeight",
          "outdent",
          "indent",
          "quote",
        ],
      },
      moreRich: {
        buttons: [
          "insertLink",
          "insertImage",
          "insertVideo",
          "insertTable",
          "emoticons",
          "fontAwesome",
          "specialCharacters",
          "embedly",
          "insertFile",
          "insertHR",
        ],
      },

      moreMisc: {
        buttons: [
          "undo",
          "redo",
          "fullscreen",
          "print",
          "getPDF",
          "spellChecker",
          "selectAll",
          "html",
          "help",
        ],
        align: "right",
      },
    },
    imageAllowedTypes: ["jpeg", "jpg", "png"],
    language: "ko",
    height: "434",
    width: "100%",
    quickInsertEnabled: false,
    videoInsertButtons: ["videoBack", "|", "videoByURL", "videoUpload"],
  };

  return (
    <FroalaEditorComponent
      tag="textarea"
      config={config}
      model={text}
      onModelChange={setText}
    />
  );
};

export default FroalaSetup;
