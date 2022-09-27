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
            <button className="commonbtn">Get Started</button>
          </div>
          <div className="landingImg">
            <img src="/assets/banner.png" alt="landing" className="bannerImg" />
          </div>
        </div>
      </div>

      <div className="mainContainer">
        <div className="introContainer">
          <h1>Introducing DNA</h1>
          <div className="introPara">
            <p>
              A NFT that evolves, every time you make an transaction your DNA
              EVOLVES
            </p>
          </div>

          <button className="commonbtn">Read More</button>
        </div>
      </div>

      <div className="mainContainerHodl">
        <div className="holdContainer">
          <img src="/assets/mooncafe.png" alt="banner2" />
          <div className="holdContent">
            <h1 className="landingHead">hoDL</h1>
            <p>
              The DNA you hold will give you access to the premium features
              WRYTE has set out to build. Programmable newsletters, custom
              domains just to name a few.
            </p>
          </div>
        </div>
      </div>

      <div className="powerContainerHodl">
        <div className="powerContainer">
          <h3>Powered By</h3>
          <div className="powerImgContainer">
            <img src="/assets/polygon.png" />
            <img src="/assets/moralis.png" />
            <img src="/assets/filecoin.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
