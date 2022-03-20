import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TaskBuilder from "./TaskBuilder";

function AssignmentTasks({
  setSubTask1,
  setSubTask2,
  setSubTask3,
  subTask1,
  subTask2,
  subTask3,
}) {
  const subTask1Handler = (e) => {
    setSubTask1(e.target.value);
  };
  const subTask2Handler = (e) => {
    setSubTask2(e.target.value);
  };
  const subTask3Handler = (e) => {
    setSubTask3(e.target.value);
  };

  return (
    <div className="breakdown-tasks">
      <h5>BREAKDOWN TASK</h5>
      <TaskBuilder onChange={subTask1Handler} value={subTask1} />
      <TaskBuilder onChange={subTask2Handler} value={subTask2} />
      <TaskBuilder onChange={subTask3Handler} value={subTask3} />
      <button>Add Tasks</button>
      <button>
        <FontAwesomeIcon icon={faTasks} />
        Add Pomodoro
      </button>
    </div>
  );
}

export default AssignmentTasks;
