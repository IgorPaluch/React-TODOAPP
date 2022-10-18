import Todo from "./Todo";

const TodoList = ({ todos, setTodos, status, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            setTodos={setTodos}
            todos={todos}
            todo={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
