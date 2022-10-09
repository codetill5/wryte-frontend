import React from "react";

const Landing = () => {
  return (
    <>
      <div className="outerContainer">
        <div className="landingContainer">
          <div className="landingContent">
            <h1 className="heading">Publish, Share & Earn</h1>
            <p className="subHeading">
              A Decentralized open source publishing platform with a privacy
              protection focus.
            </p>
            <button className="commonbtn">Get Started</button>
          </div>
          <div className="landingImg">
            <img src="/assets/banner.png" alt="landing" className="bannerImg" />
          </div>
        </div>
      </div>

      <div className="editorContainer">
        <div className="editorContainer">
          <div className="editorContent">
            <h1 className="editorHeading">Smooth Writing Experience</h1>
            <p className="editorSubHeading">
              Wryte makes your writing experience more smooth by providing easy
              to use simple and powerful editor at the same time, Wryte's editor
              explodes the possibilities of anything you want in your writing
              journey
            </p>
          </div>

          <img src="/assets/editor.png" alt="landing" className="editorImg" />
        </div>
      </div>
      <div className="outerContainer tipContainer">
        <div className="landingContainer tipContent">
          <div className="landingContent tipLandingContent">
            <h1 className="heading tipHeading">Tip it</h1>
            <p className="subHeading tipSubHeading tipPara">
              Loved the story ?
            </p>
            <p className="subHeading tipSubHeading">
              Appreciate the creator, by tipping them with the WRYTE in platform
              currency "TIP COIN" 🪙
            </p>
            <button className="commonbtn tipBtn">Explore</button>
          </div>
          <div className="tipImg">
            <img src="/assets/money.png" alt="landing" className="bannerImg" />
          </div>
        </div>
      </div>

      <div className="outerContainer earnContainer">
        <div className="landingContainer">
          <div className="landingContent earnContent">
            <h1 className="earnhSuperheading">Unique Earning Model</h1>
            <div className="listingContainer">
              <img src="/assets/icons/rocketIcon.png" />
              <h1 className="earnHeading">Write2Earn</h1>
            </div>
            <p className="earnSubHeading">
              Create hype by writing creative stories, more hype equals more
              reward
            </p>

            <div className="listingContainer">
              <img src="/assets/icons/rocketIcon.png" />
              <h1 className="earnHeading">Read2Earn</h1>
            </div>
            <p className="earnSubHeading">
              The more time you spend reading creator's content, the more money
              you earn. Learn how we calculate reading time.
            </p>

            <div className="listingContainer">
              <img src="/assets/icons/rocketIcon.png" />
              <h1 className="earnHeading">Share2Earn</h1>
            </div>
            <p className="earnSubHeading">
              Share the article, get the user into the house and get rewarded.
              Check the reward splits
            </p>
          </div>

          <div className="landingImg earnImg">
            <img src="/assets/salbae.png" alt="landing" className="bannerImg" />
          </div>
        </div>
      </div>

      <div className="outerContainer">
        <div className="landingContainer">
          <div className="landingContent">
            <h1 className="heading">Mission</h1>
            <p className="subHeading">
              With write2earn and read2earn as the core mechanic, Wryte can make
              millions of people to learn more and generate passive incomes
            </p>
          </div>
          <div className="landingImg">
            <img src="/assets/rocket.png" alt="landing" className="bannerImg" />
          </div>
        </div>
      </div>

      <div className="powerContainer">
        <span style={{ opacity: '0.8', marginBottom: '10px'  }}>Powered by</span>
        <img src="/assets/polygonnew.png" alt="chain" />
      </div>
    </>
  );
};

export default Landing;
