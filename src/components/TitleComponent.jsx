import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/pages/css/TitleComponent.css'

function TitleComponent(props) {
  return (
    <div className="content-header">
      <div className="content-header-logo">
        <FontAwesomeIcon icon={props.icon} size="xl" inverse/>
      </div>
      <div className="content-header-text">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default TitleComponent;
