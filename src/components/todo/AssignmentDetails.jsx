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
  const descHandler = (e)=> {
    setDescTodo(e.target.value);
  }

  return (
    <div className="assignment-details">
      <h5>ASSIGNMENT DETAILS</h5>
      <div className="detail-date">
        <FontAwesomeIcon icon={faTasks} />
        <input type={"datetime-local"} onChange={dateHandler} />
      </div>
      <div className="file-detail">
        <div className="file-default">
          <FontAwesomeIcon icon={faTasks} />
          <TodoDetail type={"file"} />
        </div>
      </div>
      <div className="link-detail">
        <div className="link-default">
          <FontAwesomeIcon icon={faTasks} />
          <TodoDetail linkHandler={linkHandler} type={"url"} value={linkTodo}/>
        </div>
      </div>
      <div className="desc-detail">
        <FontAwesomeIcon icon={faTasks} />
        <input type="text" onChange={descHandler} value={descTodo}/>
      </div>
    </div>
  );
}

export default AssignmentDetails