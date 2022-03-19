import React from "react";
import "../styles/pages/css/SideBarComponent.css";
import SideBarLinks from "./SideBar/SideBarLinks";
import SideBarProfile from "./SideBar/SideBarProfile";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarComponent(props) {
  return (
    <div className={props.className}>
      <div className="side-bar-header">
        <button onClick={props.sideBarHandler}>
          <FontAwesomeIcon
            icon={props.fullDashboard ? faArrowLeft : faBars}
            size="lg"
          />
        </button>
        <h3>Learning Process</h3>
      </div>
      <SideBarProfile fullDashboard={props.fullDashboard} />
      <SideBarLinks fullDashboard={props.fullDashboard} />
    </div>
  );
}

export default SideBarComponent;
