import { Button } from "@material-ui/core";
import {
    ArrowRightOutlined,
  BusinessCenterOutlined,
  ChatOutlined,
  NotificationsOutlined,
  RssFeedOutlined,
  Search,
  SupervisorAccountOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption.js";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          style={{ paddingRight: 15, borderRight: "1px solid rgba(0,0,0,0.2)" }}
          src="/images/logo.png"
          alt="linkedin logo"
        />
        <HeaderOption Icon={RssFeedOutlined} title="FEED" />
        <HeaderOption Icon={SupervisorAccountOutlined} title="NETWORK" />
        <HeaderOption Icon={BusinessCenterOutlined} title="JOBS" />
        <HeaderOption Icon={ChatOutlined} title="CHAT" />
        <HeaderOption Icon={NotificationsOutlined} title="NOTICES" />
      </div>

      <div className="header__right">
        <div className="header__search">
          <Search style={{ color: "black" }} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="header__profile">
          <img
            style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}
            src="/images/profil.jpg"
            alt="profil"
          />
          <div style={{color:"black", fontSize:10}}>
            <p >IBRAHIM TASKIN <span style={{color:"gray"}}>You</span></p>
            <label style={{color:"gray",fontSize:8}}>{"453views today "}</label><span style={{color:"greenyellow",fontSize:8}}>+42 <ArrowRightOutlined style={{fontSize:10}}/></span>
          </div>
        </div>
        <div className="header__other">          
            <Button >
                <p>...</p>
                <span>Other</span>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
