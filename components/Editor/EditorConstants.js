import Embed from "@editorjs/embed";
import Header from "editorjs-header-with-alignment";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import ImageTool from "@editorjs/image";
import CheckList from "@editorjs/checklist";
import Underline from "@editorjs/underline";
import Paragraph from "editorjs-paragraph-with-alignment";
import Table from "@editorjs/table";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import ChangeCase from "editorjs-change-case";
import Alert from "editorjs-alert";
import ColorPlugin from "editorjs-text-color-plugin";

import { uploadToIPFS } from "../../helper";

const constants = {
  header: {
    class: Header,
    config: {
      levels: [1, 2, 3, 4],
      defaultLevel: 1,
      inlineToolbar: true,
    },
  },
  embed: Embed,
  list: List,
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  Color: {
    class: ColorPlugin,
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
    },
  },
  code: Code,
  inlineCode: InlineCode,
  marker: Marker,
  underline: Underline,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  changeCase: {
    class: ChangeCase,
    config: {
      showLocaleOption: true,
      locale: "tr",
    },
  },
  alert: Alert,
  delimiter: Delimiter,
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const response = await uploadToIPFS(file);
          console.log(response?.value?.cid, "infucn");
          return {
            success: 1,
            file: {
              url: `https://ipfs.io/ipfs/${response?.value?.cid}`,
            },
          };
        },
      },
    },
  },
};

export default constants;
