import { Avatar, Icon, IconButton, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, dropdown }) => {
  return !dropdown ? (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon"> ⬇</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  ) : (
    <div className="headerOption">
      {Icon && (
        <Icon  id="demo-simple-select-label" className="headerOption__icon">       
        </Icon>
      )}
          <Select style={{height:4}}  id="demo-simple-select">
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </Select>
      {avatar && <Avatar className="headerOption__icon"> ⬇</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
