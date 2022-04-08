import React from "react";
import { Link } from "react-router-dom";

function SideBarBuilder(props) {
  const Icon = props.icon;
  return (
    <div className="link" id={props.name + "-link"}>
      <Link to={`${props.link}`}>
        <button className="link-button" title={props.name}>
          <Icon size={props.size}/>
        </button>
      </Link>
      <h4>{props.name}</h4>
    </div>
  );
}

export default SideBarBuilder;
