import '../styles/TodoList.css'
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
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
    </div>
  );
};

export default TodoList