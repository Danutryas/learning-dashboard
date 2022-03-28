import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import TodoDetail from "./TodoDetail";

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
    <div className="left-panel">
      <h5 className="container-title">ASSIGNMENT DETAILS</h5>
      <div className="panel-form">
        <div className="detail-date">
          <FontAwesomeIcon icon={faTasks} inverse size="lg" />
          <input type={"datetime-local"} onChange={dateHandler} />
        </div>
        <div className="link-detail">
          <FontAwesomeIcon icon={faTasks} inverse size="lg" />
          <input type={"url"} onChange={linkHandler} value={linkTodo} />
        </div>
        <div className="desc-detail">
          <FontAwesomeIcon icon={faTasks} inverse size="lg" />
          <textarea onChange={descHandler} value={descTodo} />
        </div>
      </div>
    </div>
  );
}

export default AssignmentDetails;
