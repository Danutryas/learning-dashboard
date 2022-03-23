import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TaskBuilder from "./TaskBuilder";

function AssignmentTasks({ setSubTask, subTask }) {
  const inputHandler = (i, e) => {
    const values = [...subTask];
    const targetValue = e.target.value
    values[i][e.target.name] = targetValue;
    setSubTask(values);
  };
  const addInputHandler = () => {
    setSubTask([
      ...subTask,
      {
        task: "",
      }
    ]);
  };
  const removeInputhandler = (index) => {
    const values = [...subTask]
    const length = values.length
    if (length > 3) {
      values.splice(index,1)
      setSubTask(values)
    }
  }


  return (
    <div className="breakdown-tasks">
      <h5>BREAKDOWN TASK</h5>
      {subTask.map((task, i) => {
        return (
          <div key={i}>
            <TaskBuilder
              i={i}
              onChangeFunc={inputHandler}
              task={task}
              removeInputhandler={removeInputhandler}
            />
          </div>
        );
      })}
      <button onClick={addInputHandler}>Add Tasks</button>
      <button>
        <FontAwesomeIcon icon={faTasks} />
        Add Pomodoro
      </button>
    </div>
  );
}

export default AssignmentTasks;
