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
  setSubTask1,
  subTask1,
  setSubTask2,
  subTask2,
  setSubTask3,
  subTask3,
}) {
  return (
    <div style={{ display: "flex" }}>
      <AssignmentDetails
        setDeadline={setDeadline}
        deadline={deadline}
        setLinkTodo={setLinkTodo}
        linkTodo={linkTodo}
        setDescTodo={setDescTodo}
        descTodo={descTodo}
      />
      <AssignmentTasks
        setSubTask1={setSubTask1}
        setSubTask2={setSubTask2}
        setSubTask3={setSubTask3}
        subTask1={subTask1}
        subTask2={subTask2}
        subTask3={subTask3}
      />
    </div>
  );
}

export default AssignmentTodoForm;
