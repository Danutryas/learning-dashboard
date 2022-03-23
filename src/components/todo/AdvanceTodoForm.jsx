import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import AssignmentTodoForm from "./AssignmentTodoForm";
import EventTodoForm from "./EventTodoForm";

function AdvanceTodoForm({
  setAdvanceInput,
  inputText,
  todos,
  setTodos,
  setInputText,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitKeyPress = (e) => {
    if (e.code === "Enter") {
      submitTodoHandler();
    }
  };
  const [todoTypeStatus, setTodoTypeStatus] = useState("assignment");
  const todoTypeStatusHandler = (e) => {
    setTodoTypeStatus(e.target.value);
  };

  const [deadline, setDeadline] = useState("");
  const [linkTodo, setLinkTodo] = useState("");
  const [descTodo, setDescTodo] = useState("");
  const [subTask, setSubTask] = useState([
    {task:""},
    {task:""},
    {task:""},
  ]);

  
  const submitTodoHandler = (e) => {
    const notEmptySubtask = subTask.filter((task) => task.task !== "");

    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: inputText,
          completed: false,
          deadline: deadline,
          type: todoTypeStatus,
          file: "",
          link: linkTodo,
          desc: descTodo,
          subtask: notEmptySubtask,
        },
      ]);
    }
    setInputText("");
    setDescTodo("");
    setLinkTodo("");
    setDeadline("");
    setSubTask([
      {task:""},
      {task:""},
      {task:""},
    ])
  };
  console.log(todos)
  return (
    <div>
      <div className="">
        <button onClick={() => setAdvanceInput(false)}>X</button>
      </div>
      <div className="name-section">
        <FontAwesomeIcon icon={faTasks} inverse />
        <input
          type="text"
          onChange={inputTextHandler}
          onKeyPress={submitKeyPress}
          value={inputText}
        />
        <input type={"submit"} onClick={submitTodoHandler} value="+" />
      </div>
      <div className="category-section">
        <FontAwesomeIcon icon={faTasks} />
        <select onChange={todoTypeStatusHandler} name="todoOption">
          <option value={"assignment"}>Assignment</option>
          <option value={"event"}>Event</option>
        </select>
      </div>
      {todoTypeStatus === "assignment" ? (
        <AssignmentTodoForm
          setDeadline={setDeadline}
          deadline={deadline}
          setLinkTodo={setLinkTodo}
          linkTodo={linkTodo}
          setDescTodo={setDescTodo}
          descTodo={descTodo}
          subTask={subTask}
          setSubTask={setSubTask}
        />
      ) : (
        <EventTodoForm />
      )}
    </div>
  );
}

export default AdvanceTodoForm;
