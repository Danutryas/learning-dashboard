import React from "react";

import { MdMonitor } from "react-icons/md";
import { FaHouseUser, FaMusic } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";
import { CgBell } from "react-icons/cg";
import SideBarBuilder from "./SideBarBuilder";

function SideBarLinks() {
  // list of builder
  return (
    <div className="side-bar-links">
      <SideBarBuilder link={"/"} name={"Home"} icon={FaHouseUser} size="20px" />
      <SideBarBuilder
        link={"/dashboard"}
        name={"Dashboard"}
        icon={MdMonitor}
        size="22px"
      />
      <SideBarBuilder
        link={"/todo"}
        name={"Todo"}
        icon={RiCalendarTodoFill}
        size="20px"
      />
      <SideBarBuilder
        link={"/reminder"}
        name={"Reminder"}
        icon={CgBell}
        size="22px"
      />
      <SideBarBuilder
        link={"/music"}
        name={"Music"}
        icon={FaMusic}
        size="18px"
      />
    </div>
  );
}

export default SideBarLinks;
