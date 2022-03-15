import React, { useEffect } from "react";
import "../styles/pages/css/TodoComponent.css";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import TodoProgress from "./todo/TodoProgress";

function TodoComponent({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
  filteredTodos,
  setFilteredTodos,
}) {
  return (
    <div className="todo-app">
      <TodoForm
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <div className="todo-progress">
        <TodoProgress todos={todos} />
      </div>
      <div className="todo-list">
        <TodoList
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          todos={todos}
          setStatus={setStatus}
        />
      </div>
    </div>
  );
}
export default TodoComponent;
