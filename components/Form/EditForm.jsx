import React from "react";

const EditForm = () => {
  return (
    <div className="axil-contact-form-area editProfileHeader">
      <h2 className="title mb--10 editProfileHeader">Profile Settings</h2>
      <p className="b3 mb--30 editProfileHeader">You can update your profile details here</p>
      <form className="axil-contact-form contact-form--1 row editProfile">
        
        <div className="col-12 col-md-9">
        <div className="col-10">
          <div className="avatarContainer">
            <img src="/assets/randomProfile.png" alt="profile" />
            <button>
              Change Profile
            </button>
          </div>
        </div>
          <div className="form-group">
            <label htmlFor="contact-name">Display name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">Short bio</label>
            <textarea className="shortBioInput" required />
            <p className="inputOuterText">
              Your profile will be available on wryte.xyz/profile/[username]
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input type="email" required />
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Twitter</label>
              <input
                className="socialLinkInput"
                type="text"
                placeholder="Enter your twitter username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Telegram</label>
              <input
                className="socialLinkInput"
                type="text"
                placeholder="Enter your telegram username"
                required
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
