import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import contractABI from "../../contractABI.json";
import { uploadToIPFS } from "../../helper";
import Editor from "../../components/Editor/Editor";
import keys from "../../config/key.config";

const Create = () => {
  const [metdata, setMetadata] = useState();
  const onSaveHandler = async (blogData, title, coverImg) => {
    const toSaveData = {
      title,
      blogData,
      coverImg,
    };

    const json = JSON.stringify(toSaveData);
    const file = new Blob([json], { type: "text/json" });
    const response = await uploadToIPFS(file);
    setMetadata(response?.value?.cid);
  };

  const mintBlog = async () => {
    const contractAddress = keys.MINT_CONTRACT;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc721 = new ethers.Contract(contractAddress, contractABI, signer);
    await erc721.mint(metdata);
  };

  useEffect(() => {
    if (metdata) {
      mintBlog();
    }
  }, []);

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
