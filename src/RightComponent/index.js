import React, { Component } from "react";
import "./RightComponent.css";
import Optin from "./images/Optin.png";
import Wtfmodule from "./images/Wtfmodule.png";

class RightComponent extends Component {
  render() {
    return (
      <div className="right">
        <div className="right-top">
          <img src={Optin} alt="Optin" />
        </div>
        <div className="right-bottom">
          <img src={Wtfmodule} alt="Wtfmodule" />
        </div>
      </div>
    );
  }
}

export default RightComponent;
