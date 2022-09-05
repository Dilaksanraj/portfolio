import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {

  const skillData = [
    "Php Developer (Laravel)😎",
    1200,
    "Full stack Developer 💻",
    1000,
    "Angular 📱",
    1000,
    "Javascript 🔴",
    1000,
    "Typescript 🔴",
    1000,
    "React/React Native 🌐",
    1000,
    "Html 🌐",
    1000,
    "css 🌐",
    1000,
  ];
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/dilaksanraj.alexsander/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/dilaksanraj-alexsandar">
              <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/dilaksan_raj/">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Dilaksanraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={skillData}
                />
              </h1>
            </span>

            <span className="profile-role-tagline">
              MSc Computer Science (Software engineering)
            </span>
            <span className="profile-role-tagline">
              BSc Business information system (Special)
            </span>
           
          </div>

          <div className="profile-options">
            {/* <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button> */}
            <a href="https://cfm-list.s3.eu-west-3.amazonaws.com/Dilaksanraj-f1.pdf" download="Alexsandar_Dilaksanraj_fr.pdf">
              <button className="btn highlighted-btn">Get Resume FR</button>
            </a>
            <a href="https://cfm-list.s3.eu-west-3.amazonaws.com/Dilaksanraj-v1.pdf" download="Alexsandar_Dilaksanraj_en.pdf">
              <button className="btn highlighted-btn">Get Resume EN</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
