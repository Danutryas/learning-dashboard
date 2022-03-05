import React, { useState, useEffect } from "react";
import "../styles/pages/css/TodoComponent.css";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import TodoProgress from "./todo/TodoProgress";

function TodoComponent() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  // Save localhost database
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="todo-app">
      <div className="todo-form">
        <TodoForm
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          />
      </div>
      <div className="todo-progress">
        <TodoProgress 
          todos={todos}
        />
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
