import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faX} from '@fortawesome/free-solid-svg-icons'

function Todo({ text, todo, setTodos, todos, complete, i, detailsHandler }) {
  const deleteButton = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
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
    <div
      className={`todo  ${complete ? "complete" : "uncomplete"}`}
      onClick={() => detailsHandler(i)}
    >
      <li className="todo-item">
        <p>{text}</p>
      </li>
      <div className="todo-button">
        <button className="complete-button" onClick={completeButton}>
          {complete ? (
            <FontAwesomeIcon icon={faX} size="lg" />
          ) : (
            <i className="fas fa-check"></i>
          )}
        </button>
        <button className="trash-button" onClick={deleteButton}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
