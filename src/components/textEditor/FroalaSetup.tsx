import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/languages/ko";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import Froalaeditor from "froala-editor";
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
      },
    },
    imageAllowedTypes: ["jpeg", "jpg", "png"],
    /* language: "ko", */
    height: "434",
    width: "100%",
    quickInsertEnabled: false,
    videoInsertButtons: ["videoBack", "|", "videoByURL", "videoUpload"],
    paragraphFormat: {
      N: "Normal",
      heading1: "Heading 1",
      H2: "Heading 2",
    },
  };

  Froalaeditor.DefineIcon("bold", {
    PATH: "M0 1.71429C0 0.766071 0.744792 0 1.66667 0H4.16667H5H11.6667C15.349 0 18.3333 3.06964 18.3333 6.85714C18.3333 8.53393 17.7448 10.0768 16.7708 11.2661C18.7031 12.4661 20 14.6464 20 17.1429C20 20.9304 17.0156 24 13.3333 24H5H4.16667H1.66667C0.744792 24 0 23.2339 0 22.2857C0 21.3375 0.744792 20.5714 1.66667 20.5714H2.5V12V3.42857H1.66667C0.744792 3.42857 0 2.6625 0 1.71429ZM11.6667 10.2857C13.5052 10.2857 15 8.74821 15 6.85714C15 4.96607 13.5052 3.42857 11.6667 3.42857H5.83333V10.2857H11.6667ZM5.83333 13.7143V20.5714H13.3333C15.1719 20.5714 16.6667 19.0339 16.6667 17.1429C16.6667 15.2518 15.1719 13.7143 13.3333 13.7143H11.6667H5.83333Z",
  });

  Froalaeditor.DefineIcon("paragraphFormat", {
    PATH: "M8.46154 0H11.8462H20.3077C21.2438 0 22 0.766071 22 1.71429C22 2.6625 21.2438 3.42857 20.3077 3.42857H18.6154V22.2857C18.6154 23.2339 17.8591 24 16.9231 24C15.987 24 15.2308 23.2339 15.2308 22.2857V3.42857H13.5385V22.2857C13.5385 23.2339 12.7822 24 11.8462 24C10.9101 24 10.1538 23.2339 10.1538 22.2857V17.1429H8.46154C3.78654 17.1429 0 13.3071 0 8.57143C0 3.83571 3.78654 0 8.46154 0Z",
  });

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
