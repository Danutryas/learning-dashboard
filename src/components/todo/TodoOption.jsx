import React, { useState } from "react";
import AdvanceTodoForm from "./AdvanceTodoForm";
import SimpleTodoForm from "./SimpleTodoForm";

function TodoOption({
  setInputText,
  setTodos,
  inputText,
  todos,
  advanceInput,
  setAdvanceInput,
  showIndex,
}) {
  return (
    <div>
      <div className="todo-choose-button">
        <button onClick={() => setAdvanceInput(false)}>Simple Input</button>
        <button onClick={() => setAdvanceInput(true)}>Advance Input</button>
      </div>

      {advanceInput ? (
        <AdvanceTodoForm
          advanceInput={advanceInput}
          setAdvanceInput={setAdvanceInput}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setInputText={setInputText}
          showIndex={showIndex}
        />
      ) : (
        <SimpleTodoForm
          advanceInput={advanceInput}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setInputText={setInputText}
        />
      )}
    </div>
  );
}

export default TodoOption;
