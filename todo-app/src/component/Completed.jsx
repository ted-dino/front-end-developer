import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import deleteIcon from "../asset/delete_forever.png";

const Completed = () => {
  const { todos, setTodos, toggleComplete } = useContext(TodoContext);

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteCompletedTask = () => {
    const pendingTask = todos.filter((todo) => {
      if (!todo.isCompleted) {
        return todo;
      }
    });
    setTodos(pendingTask);
  };

  return (
    <div className="todo-list d-flex">
      {todos?.length > 0 &&
        todos.map((todo, index) => {
          if (todo?.isCompleted) {
            return (
              <div key={index} className="todo d-flex">
                <input
                  type="checkbox"
                  id={`${todo?.id}`}
                  name={`${todo?.todo}`}
                  value={`${todo?.todo}`}
                  defaultChecked={todo?.isCompleted}
                  onClick={toggleComplete}
                />
                <label htmlFor={`${todo?.id}`}> {todo?.todo}</label>
                <button
                  className="delete-icon"
                  onClick={() => deleteTask(todo.id)}
                >
                  <img src={deleteIcon} alt="/" />
                </button>
              </div>
            );
          }
        })}
      {todos.length > 0 && (
        <button className="delete-btn d-flex" onClick={deleteCompletedTask}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
            <path d="M7.854 13.812 10 11.688l2.125 2.124 1.229-1.208-2.146-2.146 2.146-2.146-1.229-1.208L10 9.229 7.854 7.104 6.625 8.312l2.146 2.146-2.146 2.146ZM5.896 17.5q-.729 0-1.24-.51-.51-.511-.51-1.24V5.125h-.813v-1.75h4.209V2.5h4.916v.875h4.209v1.75h-.834V15.75q0 .729-.51 1.24-.511.51-1.24.51Zm8.187-12.375H5.896V15.75h8.187Zm-8.187 0V15.75Z" />
          </svg>
          <span>delete all</span>
        </button>
      )}
    </div>
  );
};

export default Completed;
