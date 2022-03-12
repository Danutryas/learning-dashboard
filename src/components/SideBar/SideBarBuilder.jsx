import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SideBarBuilder(props) {
  
  return (
    <div className="link" id={props.name + "-link"}>
      <Link to={`${props.link}`}>
        <button className="link-button" title={props.name}>
          <FontAwesomeIcon icon={props.icon} size="lg" />
        </button>
      </Link>
      <h4>{props.name}</h4>
    </div>
  );
}

export default SideBarBuilder;
