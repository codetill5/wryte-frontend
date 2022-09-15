import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import ImageTool from "@editorjs/image";

import { uploadMetadata } from "../../helper";

const constants = {
  embed: Embed,
  list: List,
  marker: Marker,
  header: Header,
  delimiter: Delimiter,
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const response = await uploadMetadata(file);
          return {
            success: 1,
            file: {
              url: {
                url: `https://ipfs.io/ipfs/${response?.value?.cid}`,
              },
            },
          };
        },
      },
    },
  },
};

export default constants;
