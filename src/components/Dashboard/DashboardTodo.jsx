import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DashboardTodo({ todos, setTodos, filteredTodos,}) {
  const todo = filteredTodos[0];

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
        {todo !== undefined ? (
          <div>
            <p>{todo.text}</p>
            <button onClick={completeButton}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2xl"
                style={{ color: "#87B87F" }}
              />
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
