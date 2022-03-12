import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DashboardTodo() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todo = filteredTodos[0];

  useEffect(() => {
    localGet();
  }, [setFilteredTodos]);

  useEffect(() => {
    // localSave
    localStorage.setItem("todos", JSON.stringify(todos));
    setFilteredTodos(todos.filter((todo) => todo.completed === false));
  }, [todos, setFilteredTodos]);


  const localGet = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  const completeButton = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo-Dashboard`}>
      <div className="card-header">
        <h3 className="card-title">todo</h3>
        <Link to="/todo">
          <button className="forward-button" title="Go to todo page">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} inverse />
          </button>
        </Link>
      </div>
      <div className="todo-status ">
        <p className="card-text">Up Coming todo</p>
        {todo !== undefined ? (
          <div>
            <p>{todo.text}</p>
            <button onClick={completeButton}>
              <FontAwesomeIcon icon={faCircleCheck} size="2xl" style={{color:  "#87B87F"}}/>
            </button>
          </div>
        ) : (
          <div>
            <p>There is no todo</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardTodo;
