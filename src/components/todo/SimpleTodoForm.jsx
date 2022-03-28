import React from "react";

const SimpleTodoForm = ({
  inputText,
  todos,
  setTodos,
  setInputText,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitKeyPress = (e) => {
    if (e.code === "Enter") {
      submitTodoHandler();
    }
  };
  const submitTodoHandler = (e) => {
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 1000),
          text: inputText,
          completed: false,
          deadline: "",
          type: "",
          file: "",
          link: "",
          desc: "",
          subtask: [],
        },
      ]);
    }
    setInputText("");
  };



  return (
    <div className="todo-form">
      <h3>Simple Form</h3>
      <div className="form-input">
        <input
          type="text"
          onChange={inputTextHandler}
          onKeyPress={submitKeyPress}
          value={inputText}
        />
        <input type={"submit"} onClick={submitTodoHandler} value="+" />
      </div>
    </div>
  );
};

export default SimpleTodoForm;
