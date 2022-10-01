import { uploadToIPFS } from "../../helper";
import Editor from "../../components/Editor/Editor";

const Create = () => {
  const onSaveHandler = async (blogData, title, coverImg) => {
    const toSaveData = {
      title,
      blogData,
      coverImg,
    };

    const json = JSON.stringify(toSaveData);
    const file = new Blob([json], { type: "text/json" });
    const response = await uploadToIPFS(file);
    console.log(response)
  };

  return (
    <div className="storyContainer">
      <Editor
        onSave={(editorData, title, coverImg) =>
          onSaveHandler(editorData, title, coverImg)
        }
      />
    </div>
  );
};

export default Create;
