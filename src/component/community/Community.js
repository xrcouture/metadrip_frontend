import React from "react";
import "./community.css";
import threed from "../../assets/3d.png";
import { RiTwitterLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";

function Community() {
  return (
    <div className="community-container container">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6 p-0">
          <div className="partners container">
            <p className="partner-title">Partners</p>
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 partner-icon-container">
                {" "}
                <img src={partner1} alt="" className="partner-icon" />{" "}
                <p className="partner-text mt-4">Decentraland</p>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 partner-icon-container">
                {" "}
                <img src={partner2} alt="" className="partner-icon" />{" "}
                <p className="partner-text mt-4">Snapchat</p>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 partner-icon-container">
                {" "}
                <img src={partner3} alt="" className="partner-icon" />{" "}
                <p className="partner-text mt-4">Polygon</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="community-header-1 text-center">Join us</p>
          <p className="community-header-2 text-center">Join the community</p>
        <div className="community-subtitle-container">
          <p className="community-subtitle text-center w-50">
            Join our discord channel or follow us on twitter keep up to date
            with our latest work and announcements.
          </p>
        </div>
          <div className="button-groups-community">
            <button className="button-community-1">
              <RxDiscordLogo />&nbsp;&nbsp;Discord
            </button>
            <button className="button-community-2">
              <RiTwitterLine />{" "} Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
