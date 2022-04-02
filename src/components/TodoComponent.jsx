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
  const [advanceInput, setAdvanceInput] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

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
        showIndex={showIndex}
      />
      {advanceInput ? (
        ""
      ) : (
        <>
          <TodoProgress todos={todos} />
        </>
      )}

      <div className="todo-list">
        <TodoList
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          todos={todos}
          setStatus={setStatus}
          setShowIndex={setShowIndex}
          setAdvanceInput={setAdvanceInput}
        />
      </div>
    </div>
  );
}
export default TodoComponent;
