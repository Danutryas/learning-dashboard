import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {faTasks} from '@fortawesome/free-solid-svg-icons'

function TaskBuilder({ onChange,value }) {
  return (
    <div className="sub-task">
      <FontAwesomeIcon icon={faTasks} />
      <input type="text" onChange={onChange} value={value}/>
    </div>
  );
}

export default TaskBuilder