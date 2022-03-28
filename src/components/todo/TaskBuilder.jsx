import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {faTasks} from '@fortawesome/free-solid-svg-icons'

function TaskBuilder({ onChangeFunc, i, task ,removeInputhandler}) {
  return (
    <div className="sub-task" key={i}>
      <FontAwesomeIcon icon={faTasks} inverse size="lg" />
      <input
        type="text"
        onChange={(e) => onChangeFunc(i, e)}
        value={task.task}
        name={"task"}
      />
      <button onClick={() => removeInputhandler(i)}>-</button>
    </div>
  );
}
    // const notEmpty = subTask.filter((task) => task.task !== "");

export default TaskBuilder