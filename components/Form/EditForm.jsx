import React, { useState } from "react";

import { editProfile } from "../../helper";

const EditForm = ({ userdata }) => {
  const [name, setName] = useState();
  const [shortUrl, setshortUrl] = useState();
  const [email, setEmail] = useState();
  const [webUrl, setWebUrl] = useState();
  const [twitterUsername, SetTwitterUsername] = useState();
  const [telegramUsername, setTelegramUsername] = useState();
  const [profileImg, setProfileImg] = useState();

  const updateProfile = async () => {
    const data = {
      name: name,
      email: email,
      profileImg: profileImg,
      shortUrl: shortUrl,
    };
    const response = await editProfile(data);
    console.log(response);
  };

  return (
    <div className="axil-contact-form-area editProfileHeader">
      <h2 className="title mb--10 editProfileHeader">Profile Settings</h2>
      <p className="b3 mb--30 editProfileHeader">
        You can update your profile details here
      </p>
      <form className="axil-contact-form contact-form--1 row editProfile">
        <div className="col-12 col-md-9">
          <div className="col-10">
            <div className="avatarContainer">
              <img src="/assets/randomProfile.png" alt="profile" />
              <button>Change Profile</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-name">Display name</label>
            <input
              type="text"
              required
              value={userdata?.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">Bio</label>
            <textarea className="shortBioInput" required value={userdata?.bio} />
            <p className="inputOuterText">
              Your profile will be available on wryte.xyz/profile/[username]
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              required
              value={userdata?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="editSocialLinks">
            <h3 className="title mb--10">Social links</h3>
            <p className="b3 mb--30">
              Add your existing social links to build a stronger reputation
            </p>
            <div className="form-group">
              <label htmlFor="contact-email">Website URL</label>
              <input
                className="socialLinkInput"
                type="text"
                placeholder="https://"
                required
                onChange={(e) => setWebUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Twitter</label>
              <input
                className="socialLinkInput"
                type="text"
                placeholder="Enter your twitter username"
                required
                onChange={(e) => SetTwitterUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Telegram</label>
              <input
                className="socialLinkInput"
                type="text"
                placeholder="Enter your telegram username"
                required
                onChange={(e) => setTelegramUsername(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="form-submit">
            <button
              name="submit"
              type="submit"
              id="submit"
              className="axil-button button-rounded btn-primary"
            >
              Save settings
            </button>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group"></div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
