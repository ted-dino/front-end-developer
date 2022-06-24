import { useEffect, useState } from "react";

const AllTodos = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState("");
  const uniqueID = Math.random().toString(36).slice(2, 9);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim().length === 0) {
      alert("Dont be lazy, please add a todo.");
    } else {
      setTodos((prevState) => [
        ...prevState,
        { id: uniqueID, todo: todo, isCompleted: false },
      ]);
      setTodo("");
    }
  };

  const setToComplete = (e) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === e.target.id) {
        todo.isCompleted
          ? (todo.isCompleted = false)
          : (todo.isCompleted = true);
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
  };

  return (
    <div>
      <form className="d-flex form" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            name="todo"
            id="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="add todo"
            className="form-control"
          />
          <label htmlFor="todo">Add Todo</label>
        </div>
        <button className="form-btn">add</button>
      </form>
      <div className="todo-list d-flex">
        {todos?.length > 0 &&
          todos.map((todo, index) => (
            <div key={index} className="todo d-flex">
              <input
                type="checkbox"
                id={`${todo.id}`}
                name={`${todo.todo}`}
                value={`${todo.todo}`}
                onChange={setToComplete}
                defaultChecked={todo.isCompleted}
              />
              <label htmlFor={`${todo.id}`}> {todo.todo}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTodos;
