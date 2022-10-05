import React, { useState } from "react";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import TabContext from "@material-ui/lab/TabContext";
import AppBar from "@material-ui/core/AppBar";
import Image from "next/image";
import Popper from "@material-ui/core/Popper";
import Tooltip from "@material-ui/core/Tooltip";
import { HexColorPicker } from "react-colorful";

const TabsContainer = () => {
  const [value, setValue] = useState("1");
  const [color, setColor] = useState("#b32aa9");
  const [image, setImage] = useState(1);
  const [upload, setUpload] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAvatar = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleUpload = () => {};
  return (
    <div className="tabsContainer">
      <h4>Profile photo</h4>
      <TabContext value={value}>
        <AppBar position="relative">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Toy Avatar" value="1" />
            <Tab label="Avatar" value="2" />
            <Tab label="Pro Avatar" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <div className="profileShowContainer">
            <div className="profileShowBg" style={{ background: color }}>
              <img src={`/assets/avatars/${image}.png`} alt="profileImg" />
            </div>
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              style={{ zIndex: "999" }}
            >
              <HexColorPicker color={color} onChange={setColor} />
            </Popper>
            <Tooltip
              title={<p style={{ fontSize: "12px" }}>Choose Bg</p>}
              placement="right-center"
            >
              <div
                className="colorPicker"
                style={{ background: color }}
                aria-describedby={id}
                type="button"
                onClick={handleClick}
              ></div>
            </Tooltip>
            <div className="chooseAvatarContainer">
              <div className="chooseAvatar" onClick={() => handleAvatar(1)}>
                <img src="/assets/avatars/1.png" />
              </div>
              <div className="chooseAvatar" onClick={() => handleAvatar(2)}>
                <img src="/assets/avatars/2.png" />
              </div>
              <div className="chooseAvatar" onClick={() => handleAvatar(3)}>
                <img src="/assets/avatars/3.png" />
              </div>
              <div className="chooseAvatar" onClick={() => handleAvatar(4)}>
                <img src="/assets/avatars/4.png" />
              </div>
              <div className="chooseAvatar" onClick={() => handleAvatar(5)}>
                <img src="/assets/avatars/5.png" />
              </div>
              <div className="chooseAvatar" onClick={() => handleAvatar(6)}>
                <img src="/assets/avatars/6.png" />
              </div>
            </div>
            <button className="editBtn">Save avatar</button>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="profileShowContainer">
            <div className="profileShowBg" style={{ background: color }}>
              <img
                src={upload ? URL.createObjectURL(upload) : null}
                alt="profileImg"
              />
            </div>
            <input
              type="file"
              id="actual-btn"
              accept="image/*"
              hidden
              onChange={(e) => setUpload(e.target.files[0])}
            />

            <label
              for="actual-btn"
              className="editBtn"
              style={{ textAlign: "center", cursor: "pointer" }}
            >
              Upload
            </label>
          </div>
        </TabPanel>
        <TabPanel value="3">Pro Avatar</TabPanel>
      </TabContext>
    </div>
  );
};

export default TabsContainer;
