import React, { Component } from "react";
import "./App.css";
import RightComponent from "./RightComponent";
import MiddleComponent from "./MiddleComponent";
import LeftComponent from "./LeftComponent";
import NavComponent from "./NavComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <div className="body">
          <LeftComponent />
          <MiddleComponent />
          <RightComponent />
        </div>
      </div>
    );
  }
}
export default App;
