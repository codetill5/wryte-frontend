import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const EditorJs = dynamic(() => import("react-editor-js"), { ssr: false });
let editorInstance;

const Editor = (props) => {
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState();
  const [editorTools, setEditorTools] = useState();

  const onSaveHandler = async (editorInstance) => {
    try {
      const blogData = await editorInstance.save();
      if (!title || title === "")
        throw new Error("Title cannot be empty. Please enter title");
      if (!blogData.blocks[0])
        throw new Error("Blog cannot be empty. Please enter some data");
      props.onSave(blogData, title, coverImg);
    } catch (err) {
      console.log(err);
    }
  };
  const data = props.data;
  let editorComponent;
  if (!editorTools) editorComponent = "Loading...";
  else {
    editorComponent = (
      <EditorJs
        instanceRef={(instance) => (editorInstance = instance)}
        tools={editorTools}
        placeholder={`Let's write an awesome Story`}
        handle
        data={data}
      />
    );
  }

  useEffect(() => {
    const importConstants = async () => {
      const tools = (await import("../../components/Editor/EditorConstants"))
        .default;
      setEditorTools(tools);
    };

    importConstants();
  }, []);

  return (
    <div className="editorContainer">
      <input
        className="storyTitle"
        placeholder="Title"
        value={title ? title : props.title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <div className="editorBlock">{editorComponent}</div>
      <button
        className="publishBtn"
        onClick={() => onSaveHandler(editorInstance)}
      >
        Publish
      </button>
    </div>
  );
};

export default Editor;
