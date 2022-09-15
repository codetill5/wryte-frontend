import Editor from "../../components/Editor/Editor";

const Create = (props) => {
  const onSaveHandler = async (blogData, title, description) => {
    const toSaveData = {
      title,
      blogData,
      description,
    };

    console.log(toSaveData);
  };

  return (
    <div className="storyContainer">
      <Editor
        onSave={(editorData, title, description) =>
          onSaveHandler(editorData, title, description)
        }
      />
    </div>
  );
};

export default Create;
