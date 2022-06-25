import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

const AllTodos = () => {
  const { todo, setTodo, addTodo, todos, toggleComplete } =
    useContext(TodoContext);

  return (
    <div className="todo-list d-flex">
      <form className="d-flex form" onSubmit={addTodo}>
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
                id={`${todo?.id}`}
                name={`${todo?.todo}`}
                value={`${todo?.todo}`}
                onChange={toggleComplete}
                checked={todo?.isCompleted}
              />
              <label htmlFor={`${todo?.id}`}> {todo?.todo}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTodos;
