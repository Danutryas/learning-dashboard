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
  const [subTask1, setSubTask1] = useState("");
  const [subTask2, setSubTask2] = useState("");
  const [subTask3, setSubTask3] = useState("");

  const submitTodoHandler = (e) => {
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
          subtask: [subTask1, subTask2, subTask3],
        },
      ]);
    }
    setInputText("");
    setSubTask1("");
    setSubTask2("");
    setSubTask3("");
    setDescTodo("");
    setLinkTodo("");
    setDeadline("");
  };

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
          subTask1={subTask1}
          setSubTask1={setSubTask1}
          subTask2={subTask2}
          setSubTask2={setSubTask2}
          subTask3={subTask3}
          setSubTask3={setSubTask3}
        />
      ) : (
        <EventTodoForm />
      )}
    </div>
  );
}

export default AdvanceTodoForm;
