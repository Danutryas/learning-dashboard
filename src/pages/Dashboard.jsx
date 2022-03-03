import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "../styles/pages/Dashboard.css";

const DashboardPage = () => {
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
    <div className="dashboard">
      <div className="side-bar"></div>
      <div className="header"></div>
      <div className="content">
        <div className="content-left">
          <h1>Todo List</h1>
          <TodoForm
            setInputText={setInputText}
            inputText={inputText}
            setTodos={setTodos}
            todos={todos}
            setStatus={setStatus}
          />
          <TodoList
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            todos={todos}
          />
        </div>
        <div className="content-right"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
