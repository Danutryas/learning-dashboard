import React from "react";
import {
  faHomeUser,
  faWaveSquare,
  faCake,
  faMusic,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import SideBarBuilder from "./SideBarBuilder";

function SideBarLinks() {
  // list of builder
  return (
    <div className="side-bar-links">
      <SideBarBuilder link={"/"} name={"Home"} icon={faHomeUser} />
      <SideBarBuilder
        link={"/dashboard"}
        name={"Dashboard"}
        icon={faWaveSquare}
      />
      <SideBarBuilder link={"/todo"} name={"Todo"} icon={faCake} />
      <SideBarBuilder link={"/reminder"} name={"Reminder"} icon={faRandom} />
      <SideBarBuilder link={"/music"} name={"Music"} icon={faMusic} />
    </div>
  );
}

export default SideBarLinks;
