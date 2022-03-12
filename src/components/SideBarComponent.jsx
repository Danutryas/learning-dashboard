import React, { useState } from "react";
import "../styles/pages/css/SideBarComponent.css";
import SideBarLinks from "./SideBar/SideBarLinks";
import SideBarProfile from "./SideBar/SideBarProfile";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarComponent() {
  const [sideBarState, setSideBarState] = useState(true)


  const sideBarHandler = () => {
    setSideBarState(prev => !prev)
  }

  return (
    <div className={sideBarState ? "side-bar" : "side-bar-min"}>
      <div className="side-bar-header">
        <button onClick={sideBarHandler}>
          <FontAwesomeIcon icon={sideBarState ? faArrowLeft : faBars} size="lg" />
        </button>
        <h3>Learning Process</h3>
      </div>
      <SideBarProfile sideBarState={sideBarState} />
      <SideBarLinks sideBarState={sideBarState} />
    </div>
  );
}

export default SideBarComponent;
