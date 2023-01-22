import React from "react";
import "./community.css";
import { RiTwitterLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";

function Community() {
  return (
    <div className="community-container">
      <div className="row">
        <div className="join-community-container col-md-6">
          <p className="utility-content-subtitle utility-content-header-join-us text-center">Join us</p>
          <p className="utility-content-header-join text-center text-light">Join the community</p>
        <div className="community-subtitle-container">
          <p className="text-center community-subtile-text">
            Join our discord channel or follow us on twitter keep up to date
            with our latest work and announcements.
          </p>
        </div>
          <div className="button-groups-community">
            <div className="group-button">
            <button className="button-community-1">
              <RxDiscordLogo /> <span className="community-button-text">Discord</span>
            </button>
            <button className="button-community-1 button-community-2-style">
              <RiTwitterLine /><span className="community-button-text">Twitter</span>
            </button>
            </div>
          </div>
        </div>
        <div className="partners-container col-md-6 col-lg-6 col-xl-6 p-0">
          <div className="partners container">
            <p className="utility-content-header partners-header">Partners</p>
            <div className="partners-logo-container">
              <div className="partner-icon-container">
                {" "}
                <img src={partner1} alt="" className="partner-icon" />{" "}
                <p className="partners-social-subtitle">Decentraland</p>
              </div>
              <div className="partner-icon-container">
                {" "}
                <img src={partner2} alt="" className="partner-icon" />{" "}
                <p className="partners-social-subtitle">Snapchat</p>
              </div>
              <div className="partner-icon-container">
                {" "}
                <img src={partner3} alt="" className="partner-icon" />{" "}
                <p className="partners-social-subtitle">Polygon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
