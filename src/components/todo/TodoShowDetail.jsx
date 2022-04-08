import React from "react";
import { IconContext } from "react-icons";
import {
  BsCheck2Square,
  BsCalendarDate,
  BsLink45Deg,
  BsListUl,
} from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";

function TodoShowDetail({ todos, showIndex }) {
  const todo = todos[showIndex];
  return (
    <IconContext.Provider value={{ size: "20px", color: "white" }}>
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
                  <BsCheck2Square />
                  <p>{todo.completed === true ? "Complete" : "Not Complete"}</p>
                </div>
                <div className="deadline">
                  <BsCalendarDate />
                  <p>{todo.deadline}</p>
                </div>
                <div className="link">
                  <BsLink45Deg />
                  <p>{todo.link}</p>
                </div>

                <div className="description">
                  <MdOutlineDescription />
                  <p>{todo.desc}</p>
                </div>
              </div>
              <div className="list-subtask">
                <p className="title">Subtask</p>
                {todo.subtask === []
                  ? ""
                  : todo.subtask.map((task, index) => (
                      <div className="subtask">
                        <BsListUl />
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
    </IconContext.Provider>
  );
}

export default TodoShowDetail;
