import React from "react";

const TodoForm = ({ setInputText, setTodos, inputText, todos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
      ]);
    }
    setInputText("");
  };
  const submitKeyPress = (e) => {
    if (e.code === 'Enter') {
      submitTodoHandler()
    }
  }

  return (
    <>
      <h3>Todo List</h3>
      <div className="form-input">
        <input
          type="text"
          onChange={inputTextHandler}
          onKeyPress={submitKeyPress}
          value={inputText}
        />
        <input type={"submit"} onClick={submitTodoHandler} value="+" />
      </div>
    </>
  );
};

export default TodoForm;
