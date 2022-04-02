import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { BsListUl } from "react-icons/bs";
import { IconContext } from "react-icons";

function TaskBuilder({ onChangeFunc, i, task, removeInputhandler }) {
  return (
    <IconContext.Provider value={{ size: "25px", color: "white" }}>
      <div className="sub-task" key={i}>
        <BsListUl />
        <input
          type="text"
          onChange={(e) => onChangeFunc(i, e)}
          value={task.task}
          name={"task"}
        />
        <button onClick={() => removeInputhandler(i)}>-</button>
      </div>
    </IconContext.Provider>
  );
}
// const notEmpty = subTask.filter((task) => task.task !== "");

export default TaskBuilder;
