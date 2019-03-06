import React, { Component } from "react";
import "./MiddleComponent.css";
import Streamitem from "./images/Streamitem.png";
import Timelinetweetbox from "./images/Timelinetweetbox.png";

class MiddleComponent extends Component {
  render() {
    return (
      <div className="middle">
        <div className="middle-top">
          <img src={Timelinetweetbox} alt="Timelinetweetbox" />
        </div>
        <div className="middle-bottom">
          <img src={Streamitem} alt="Streamitem" />
        </div>
      </div>
    );
  }
}

export default MiddleComponent;
