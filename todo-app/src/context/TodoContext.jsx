import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();
export function TodoProvider({ children }) {
  const activeTab = localStorage.getItem("activeTab");
  const todoList = JSON.parse(localStorage.getItem("todos"));
  const [toggleState, setToggleState] = useState(
    activeTab ? parseInt(activeTab) : 1
  );
  const [todos, setTodos] = useState(todoList ? todoList : []);
  const [todo, setTodo] = useState("");
  const uniqueID = Math.random().toString(36).slice(2, 9);

  useEffect(() => {
    localStorage.setItem("activeTab", toggleState);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [toggleState, todos]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      alert("Please include a to-do item; don't be lazy.");
    } else {
      setTodos((prevState) => [
        ...prevState,
        { id: uniqueID, todo: todo, isCompleted: false },
      ]);
      setTodo("");
    }
  };

  const toggleComplete = (e) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === e.target.id) {
        todo.isCompleted
          ? (todo.isCompleted = false)
          : (todo.isCompleted = true);
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const values = {
    todo,
    setTodo,
    addTodo,
    todos,
    setTodos,
    toggleState,
    toggleTab,
    toggleComplete,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}

export default TodoContext;
