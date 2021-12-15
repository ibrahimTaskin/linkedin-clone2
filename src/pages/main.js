import React from "react";
import "./main.css";
import logo from "../images/logo.png";

const MainPage = () => {
  return (
    <div className="main">
      <div className="navigation">
        <div className="nav_logo">
          <img src={logo} />
        </div>
        <div className="nav_items">nav_items</div>
        <div className="nav_search">nav_search</div>
        <div className="nav_profile">nav_profile</div>
        <div className="nav_other">nav_other</div>
      </div>
      <div className="main__content">
        <div className="container">
            <div className="content_profile">aaa</div>
            <div className="content_tabs">bbb</div>
            <div className="content_about">ccc</div>
            <div className="content_project">ddd</div>
            <div className="content_skills">eee</div>
            <div className="content_experience">fff</div>
            <div className="content_experience2">ggg</div>
        </div>
        <div className="sidebar">
            <div className="sidebar_dashboard"></div>
            <div className="sidebar_visitoes"></div>
            <div className="sidebar_courses"></div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default MainPage;
