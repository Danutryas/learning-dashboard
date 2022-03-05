import React from "react";
import "../../styles/pages/css/TodoComponent.css";

const TodoForm = ({ setInputText, setTodos, inputText, todos, setStatus, }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.abs(Math.random() * 1000) },
    ]);
    setInputText("");
  };


  return (
    <>
      <h3>Todo List</h3>
      <div className="form-input">
        <input type="text" onChange={inputTextHandler} value={inputText} />
        <input type={"submit"} onClick={submitTodoHandler} value="+" />
      </div>

    </>
  );
};

export default TodoForm;
