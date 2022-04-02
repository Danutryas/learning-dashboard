import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  BsCheck2Square,
  BsCalendarDate,
  BsLink45Deg,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { MdOutlineDescription } from "react-icons/md";


function AssignmentDetails({
  setDeadline,
  setLinkTodo,
  linkTodo,
  setDescTodo,
  descTodo,
}) {
  const dateHandler = (e) => {
    setDeadline(e.target.value);
  };

  const linkHandler = (e) => {
    setLinkTodo(e.target.value);
  };
  const descHandler = (e) => {
    setDescTodo(e.target.value);
  };

  return (
    <IconContext.Provider value={{ size: "25px", color: "white" }}>
      <div className="left-panel">
        <h5 className="container-title">ASSIGNMENT DETAILS</h5>
        <div className="panel-form">
          <div className="detail-date">
            <BsCalendarDate />
            <input type={"datetime-local"} onChange={dateHandler} />
          </div>
          <div className="link-detail">
            <BsLink45Deg />
            <input type={"url"} onChange={linkHandler} value={linkTodo} />
          </div>
          <div className="desc-detail">
            <MdOutlineDescription />
            <textarea onChange={descHandler} value={descTodo} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default AssignmentDetails;
