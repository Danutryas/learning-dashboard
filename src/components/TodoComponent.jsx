import React, { useState } from "react";
import "../styles/pages/css/TodoComponent.css";
import TodoList from "./todo/TodoList";
import TodoOption from "./todo/TodoOption";
import TodoProgress from "./todo/TodoProgress";

function TodoComponent({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  filteredTodos,
}) {
  const [advanceInput, setAdvanceInput] = useState(true);

  return (
    <div className="todo-app">
      <TodoOption
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
        advanceInput={advanceInput}
        setAdvanceInput={setAdvanceInput}
      />
      {advanceInput ? "" : <TodoProgress todos={todos} />}
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
