import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos, setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <div className="todo-list-filter">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="uncompleted">Uncompleted</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <ul className="list-component">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text}
            key={todo.id}
            complete={todo.completed}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList