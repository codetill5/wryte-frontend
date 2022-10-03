import React from "react";

const Sidebar = ({ userdata }) => {
  const followers = userdata?.followers?.length;
  const followings = userdata?.followings?.length;
  return (
    <div className="sidebar-inner">
      <div className="axil-single-widget widget widget_categories mb--30">
        <div className="followContainer">
          <div className="followers">
            <p className="title">Followers</p>
            <p className="b3 subtitle">{followers}</p>
          </div>
          <div className="followings">
            <p className="title">Followings</p>
            <p className="b3 subtitle">{followings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
