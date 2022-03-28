import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import AssignmentTodoForm from "./AssignmentTodoForm";
import EventTodoForm from "./EventTodoForm";
import TodoShowDetail from "../todo/TodoShowDetail";

function AdvanceTodoForm({
  setAdvanceInput,
  inputText,
  todos,
  setTodos,
  setInputText,
  showIndex,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitKeyPress = (e) => {
    if (e.code === "Enter") {
      submitTodoAdvanceHandler();
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
    { task: "" },
    { task: "" },
    { task: "" },
  ]);

  const submitTodoAdvanceHandler = (e) => {
    const notEmptySubtask = subTask.filter((task) => task.task !== "");
    const customDate = deadline.slice(11) + " " + deadline.slice(0, 10);
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: inputText,
          completed: false,
          deadline: customDate,
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
    setSubTask([{ task: "" }, { task: "" }, { task: "" }]);
  };
  return (
    <>
      <div className="advance-input">
        <div className="input-heading">
          <div className="name-section">
            <FontAwesomeIcon icon={faTasks} inverse size="lg" />
            <input
              type="text"
              onChange={inputTextHandler}
              onKeyPress={submitKeyPress}
              value={inputText}
            />
            <input
              type={"submit"}
              onClick={submitTodoAdvanceHandler}
              value="save"
            />
          </div>
          <div className="close-button">
            <button onClick={() => setAdvanceInput(false)}>X</button>
          </div>
        </div>
        <div className="category-section">
          <FontAwesomeIcon icon={faTasks} inverse size="lg" />
          <select onChange={todoTypeStatusHandler} name="todoOption">
            <option value={"assignment"}>Assignment</option>
            <option value={"event"}>Event</option>
          </select>
        </div>
        <div className="form-container">
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
      </div>
      {todos.length === 0 ? (
        ""
      ) : (
        <TodoShowDetail todos={todos} showIndex={showIndex} />
      )}
    </>
  );
}

export default AdvanceTodoForm;
