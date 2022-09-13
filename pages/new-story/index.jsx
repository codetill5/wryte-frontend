import React from "react";
import dynamic from "next/dynamic";
// import { createReactEditorJS } from "react-editor-js";





// const tools = dynamic(() => import("../../components/Editor/constants"), { ssr: false });


// import { EDITOR_JS_TOOLS } from "../../components/Editor/constants";

const NewStory = () => {
  // const ReactEditorJS = createReactEditorJS();

  let MyEditor;
if (typeof window !== "undefined") {
  MyEditor = dynamic(() => import('../../components/Editor'));
}

  return (
   
      <MyEditor />
  
    // <div className="axil-contact-form-area storyContainer">
      /* <div className="floatImgContainer">
        <div className="leftImgContainer">
          <img
            src="/assets/3d-assets/3dTriangle.png"
            alt="3dObjects"
            className="threeObjects"
          />
          <img
            src="/assets/3d-assets/ball.png"
            alt="3dObjects"
            className="threeObjects"
          />
          <img
            src="/assets/3d-assets/circle.png"
            alt="3dObjects"
            className="threeObjects"
          />
        </div>

        <div className="storyBlock"> */
         
        /* </div>

        <div className="rightImgContainer">
          <img
            src="/assets/3d-assets/cube.png"
            alt="3dObjects"
            className="threeObjects"
          />
          <img
            src="/assets/3d-assets/hexagon.png"
            alt="3dObjects"
            className="threeObjects"
          />
          <img
            src="/assets/3d-assets/triangle.png"
            alt="3dObjects"
            className="threeObjects"
          />
        </div>
      </div> */
    /* </div> */
  );
};

export default NewStory;
