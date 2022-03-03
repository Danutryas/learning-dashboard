import React from "react";
import "../styles/TodoForm.css";

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
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className="todo-form">
      <div className="form-input">
        <input type="text" onChange={inputTextHandler} value={inputText} />
        <button onClick={submitTodoHandler}>+</button>
      </div>
      <div className="todo-list-filter">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default TodoForm;
