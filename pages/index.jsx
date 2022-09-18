import React from "react";

const Landing = () => {
  return (
    <>
      <div className="outerContainer">
        <div className="landingContainer">
          <div className="landingContent">
            <h1>Publish, Share</h1>
            <h1>& Earn</h1>
            <p>A decentralized and open sourced publishing platform</p>
            <button>Get Started</button>
          </div>
          <div className="landingImg">
            <img src="/assets/banner.png" alt="landing" className="bannerImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
