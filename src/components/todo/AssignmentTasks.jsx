import React from "react";
import TaskBuilder from "./TaskBuilder";

function AssignmentTasks({ setSubTask, subTask }) {
  const inputHandler = (i, e) => {
    const values = [...subTask];
    const targetValue = e.target.value;
    values[i][e.target.name] = targetValue;
    setSubTask(values);
  };
  const addInputHandler = () => {
    setSubTask([
      ...subTask,
      {
        task: "",
      },
    ]);
  };
  const removeInputhandler = (index) => {
    const values = [...subTask];
    const length = values.length;
    if (length > 3) {
      values.splice(index, 1);
      setSubTask(values);
    }
  };

  return (
    <div className="right-panel">
      <h5 className="container-title">BREAKDOWN TASK</h5>
      <div className="panel-form">
        <div className="sub-task-list">
          {subTask.map((task, i) => {
            return (
              <TaskBuilder
                i={i}
                onChangeFunc={inputHandler}
                task={task}
                removeInputhandler={removeInputhandler}
              />
            );
          })}
        </div>
        <div className="add-task">
          <button onClick={addInputHandler}>Add Tasks</button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentTasks;
