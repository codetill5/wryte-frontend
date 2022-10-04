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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Image
                src="/assets/removebg.png"
                alt="profileImg"
                height={105}
                width={105}
                priority={true}
              />
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
            <button className="editBtn">Save photo</button>
          </div>
        </TabPanel>
        <TabPanel value="2">Avatar</TabPanel>
        <TabPanel value="3">Pro Avatar</TabPanel>
      </TabContext>
    </div>
  );
};

export default TabsContainer;
