import React from "react";

import AssignmentDetails from "./AssignmentDetails";
import AssignmentTasks from "./AssignmentTasks";

function AssignmentTodoForm({
  setDeadline,
  deadline,
  setLinkTodo,
  linkTodo,
  setDescTodo,
  descTodo,
  subTask,
  setSubTask
}) {
  return (
    <div className="assignment-form">
      <AssignmentDetails
        setDeadline={setDeadline}
        deadline={deadline}
        setLinkTodo={setLinkTodo}
        linkTodo={linkTodo}
        setDescTodo={setDescTodo}
        descTodo={descTodo}
      />
      <AssignmentTasks
        setSubTask={setSubTask}
        subTask={subTask}
      />
    </div>
  );
}

export default AssignmentTodoForm;
