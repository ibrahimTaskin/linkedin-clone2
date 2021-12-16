import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const recentItem = (topic, job, type) => ( // changing component property by type variable
    <div className="sidebar__recentItem">
      {(type === 2 || type === 3) && (
        <Avatar
          style={{ borderRadius: type === 3 && 0 }}
          src={"/images/profil.jpg"}
          className="sidebar__avatar"
        />
      )}
      <div style={{ paddingLeft: 10 }}>
        <p
          style={{ color: type === 1 && "#0275B1", fontSize: type === 1 && 30 }}
        >
          {topic}
        </p>
        <span style={{ fontSize: 10 }}>{job}</span>
      </div>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__bottom">
        <p style={{ display: "flex" }}>
          YOUR DASHBOARD{" "}
          <h4 style={{ color: "#0a66c2", paddingLeft: 150, fontSize: 10 }}>
            GO TO STATS
          </h4>
        </p>
        <hr></hr>
        {recentItem("453", "views today", 1)}
        {recentItem("15", "post views", 1)}
        {recentItem("9", "search appereances", 1)}
      </div>

      <div className="sidebar__bottom">
        <p style={{ display: "flex" }}>
          VISITORS{" "}
          <h4 style={{ color: "#0a66c2", paddingLeft: 150, fontSize: 10 }}>
            VIEW ALL
          </h4>
        </p>
        <hr></hr>
        {recentItem("İbrahim Taşkın", "Engineer", 2)}
        {recentItem("İbrahim Taşkın", "Engineer", 2)}
        {recentItem("İbrahim Taşkın", "Engineer", 2)}
        {recentItem("İbrahim Taşkın", "Engineer", 2)}
        {recentItem("İbrahim Taşkın", "Engineer", 2)}
      </div>

      <div className="sidebar__bottom">
        <p style={{ display: "flex" }}>YOU MAY LIKE THIS COURSES </p>
        <hr></hr>
        {recentItem("İbrahim Taşkın", "Engineer", 3)}
        {recentItem("İbrahim Taşkın", "Engineer", 3)}
        {recentItem("İbrahim Taşkın", "Engineer", 3)}
        {recentItem("İbrahim Taşkın", "Engineer", 3)}
        {recentItem("İbrahim Taşkın", "Engineer", 3)}
      </div>
    </div>
  );
}
