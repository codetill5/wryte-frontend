import Editor from "../../components/Editor/Editor";

const Create = () => {
  const onSaveHandler = async (blogData, title, coverImg) => {
    const toSaveData = {
      title,
      blogData,
      coverImg,
    };

    console.log(toSaveData);
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
