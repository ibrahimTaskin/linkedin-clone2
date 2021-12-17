import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Feed.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feed = () => {
  const [type, setType] = useState(1);

  const handleisActive = (type) => {
    setType(type);
  };

  return (
    <div className="feed">
      <div className="feed__top">
        <img src="/images/background.jpg" alt="background" />
        <Avatar src={"/images/profil.jpg"} className="feed__avatar" />
        <h2>İbrahim Taşkın</h2>
        <div>asdasdasd</div>
      </div>

      <div className="feed__bottom" style={{ padding: 0 }}>
        <div class="tab">
          <button
            class={`tablinks ${type === 1 ? "active" : ""}`}
            onClick={() => handleisActive(1)}
          >
            Profile
          </button>
          <button
            class={`tablinks ${type === 2 ? "active" : ""}`}
            onClick={() => handleisActive(2)}
          >
            Activity Interests
          </button>
          <button
            class={`tablinks ${type === 3 ? "active" : ""}`}
            onClick={() => handleisActive(3)}
          >
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

      <div className="feed__bottom">
        <div className="carousel-wrapper">
          <Carousel infiniteLoop>
            <div>
              <img src="/images/slider1.png" />
              <p className="legend">Zara Desing Concept</p>
              <p className="branch">Branch Matrics</p>
            </div>
            <div>
              <img src="/images/slider2.png" />
              <p className="legend">Zara Desing Concept</p>
              <p className="branch">Branch Matrics</p>
            </div>
            <div>
              <img src="/images/slider3.png" />
              <p className="legend">Zara Desing Concept3</p>
              <p className="branch">Branch Matrics</p>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="feed__bottom" style={{ padding: 0 }}>
        <h2 style={{ padding: "20px" }}>Skill & Endoresments</h2>
        <div className="box">
          <div className="box_inside">
            <div>
              <p>
                User experience (UX){" "}
                <span style={{ paddingLeft: 30, color: "#0275B1" }}>6</span>
              </p>
            </div>
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
          </div>

          <div className="box_inside">
            <div>
              <p>
                User experience (UX){" "}
                <span style={{ paddingLeft: 30, color: "#0275B1" }}>6</span>
              </p>
            </div>
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
          </div>

          <div className="box_inside">
            <div>
              <p>
                User experience (UX){" "}
                <span style={{ paddingLeft: 30, color: "#0275B1" }}>6</span>
              </p>
            </div>
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
            <img src="/images/profil.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="feed__bottom" style={{ padding: 0 }}>
        <h2 style={{ padding: "20px" }}>Experience</h2>
        <div className="experience">
          <div className="experience_inside">
            <img src="/images/exp.png" alt="" />
            <div style={{padding:"15px 15px"}}>
              <h2>Freelance UX/UI designer </h2>
              <p>Self Employed Around the world</p>
              <p>Jun 2016 - Present <span style={{color:"#0275B1"}}>3 yrs 3 mos</span></p>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          <hr />          
          <div className="experience_inside">
            <img src="/images/exp.png" alt="" />
            <div style={{padding:"15px 15px"}}>
              <h2>Freelance UX/UI designer </h2>
              <p>Self Employed Around the world</p>
              <p>Jun 2016 - Present <span style={{color:"#0275B1"}}>3 yrs 3 mos</span></p>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="feed__bottom" style={{ padding: 0 }}>
        <h2 style={{ padding: "20px" }}>Education</h2>
        <div className="experience">
          <div className="experience_inside">
            <img src="/images/uni.png" alt="" />
            <div style={{padding:"15px 15px"}}>
              <h2>Selçuk Üniversitesi </h2>
              <p>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</p>
              <p>2013 — 2017</p>
              <p>
              Additional English classes and UX profile courses​.
              </p>
            </div>
          </div>         
          
        </div>
      </div>
    </div>
  );
};

export default Feed;
