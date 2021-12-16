import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Feed.css";

const Feed = () => {

  const [type,setType] = useState(1);

  const handleisActive = (type) => {
      setType(type);
  }

  return (
    <div className="feed">
      <div className="feed__top">
        <img src="/images/background.jpg" alt="background" />
        <Avatar src={"/images/profil.jpg"} className="feed__avatar" />
        <h2>İbrahim Taşkın</h2>
        <div>asdasdasd</div>
      </div>

      <div className="feed__bottom" style={{padding:0}}>
        <div class="tab">
          <button class={`tablinks ${type === 1 ? "active" : ''}`} onClick={()=> handleisActive(1)}>
            Profile
          </button>
          <button class={`tablinks ${type === 2 ? "active" : ''}`} onClick={()=> handleisActive(2)}>
            Activity Interests
          </button>
          <button class={`tablinks ${type === 3 ? "active" : ''}`} onClick={()=> handleisActive(3)}>
            Article (3)
          </button>
        </div>
      </div>

      <div className="feed__bottom">
        <p style={{ display: "flex" }}>About </p>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>

      
    </div>
  );
};

export default Feed;
