const Active = () => {
  const todoList = JSON.parse(localStorage.getItem("todos"));

  return (
    <div className="todo-list d-flex">
      {todoList.length > 0 &&
        todoList.map((todo, index) => {
          if (!todo.isCompleted) {
            return (
              <div key={index} className="todo d-flex">
                <input
                  type="checkbox"
                  id={`${todo.id}`}
                  name={`${todo.todo}`}
                  value={`${todo.todo}`}
                  defaultChecked={todo.isCompleted}
                />
                <label htmlFor={`${todo.id}`}> {todo.todo}</label>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Active;
