import React, { Component } from "react";
import "./NavComponent.css";
import Navbar from "./images/Navbar.png";

class NavComponent extends Component {
  render() {
    return (
      <div className="nav">
        <img src={Navbar} alt="Navbar" />
      </div>
    );
  }
}

export default NavComponent;
