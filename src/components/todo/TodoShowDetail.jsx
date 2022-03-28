import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

function TodoShowDetail({ todos, showIndex }) {
  const todo = todos[showIndex];
  return (
    <div className="show-detail-todo">
      {todo === undefined ? (
        ""
      ) : (
        <>
          <div className="heading">
            <h4>{todo.text}</h4>
            <p>{todo.type}</p>
          </div>
          <div className="container">
            <div className="left-container">
              <p className="title">Details</p>
              <div className="status">
                <FontAwesomeIcon icon={faTasks} inverse size="lg" />
                <p>{todo.completed === true ? "Complete" : "Not Complete"}</p>
              </div>
              <div className="deadline">
                <FontAwesomeIcon icon={faTasks} inverse size="lg" />
                <p>{todo.deadline}</p>
              </div>
              <div className="link">
                <FontAwesomeIcon icon={faTasks} inverse size="lg" />
                <p>{todo.link}</p>
              </div>

              <div className="description">
                <FontAwesomeIcon icon={faTasks} inverse size="lg" />
                <p>{todo.desc}</p>
              </div>
            </div>
            <div className="list-subtask">
              <p className="title">Subtask</p>
              {todo.subtask === []
                ? ""
                : todo.subtask.map((task, index) => (
                    <div className="subtask">
                      <FontAwesomeIcon icon={faTasks} inverse size="lg" />
                      <p className="subtask" key={index}>
                        {task.task}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoShowDetail;
