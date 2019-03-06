import React, { Component } from "react";
import "./LeftComponent.css";
import Dashboardprofilecard from "./images/Dashboardprofilecard.png";
import Trends from "./images/Trends.png";

class LeftComponent extends Component {
  render() {
    return (
      <div className="left">
        <div className="left-top">
          <img src={Dashboardprofilecard} alt="Dashboard Profile Card" />
        </div>
        <div className="left-bottom">
          <img src={Trends} alt="Trends" />
        </div>
      </div>
    );
  }
}

export default LeftComponent;
