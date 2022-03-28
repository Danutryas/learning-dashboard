import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setStatus,
  setShowIndex,
  setAdvanceInput,
}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const detailsHandler = (index) => {
    setShowIndex(index);
    setAdvanceInput(true)
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
        {filteredTodos.map((todo, i) => (
          <Todo
            i={i}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text}
            key={todo.id}
            complete={todo.completed}
            detailsHandler={detailsHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList