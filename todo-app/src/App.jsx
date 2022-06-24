import { useState, useEffect } from "react";
import AllTodos from "./component/AllTodos";
import Active from "./component/Active";
import Completed from "./component/Completed";

function App() {
  const activeTab = localStorage.getItem("activeTab");
  const todoList = JSON.parse(localStorage.getItem("todos"));
  const [toggleState, setToggleState] = useState(
    activeTab ? parseInt(activeTab) : 1
  );
  const [todos, setTodos] = useState(todoList ? todoList : []);

  useEffect(() => {
    localStorage.setItem("activeTab", toggleState);
  }, [toggleState]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div id="container" className="d-flex">
      <h1>#todo</h1>
      <div id="todo-container">
        <div id="tab-container" className="d-flex">
          <button
            className={
              toggleState === 1 ? "tabs active-tabs tabs-btn" : "tabs tabs-btn"
            }
            onClick={() => toggleTab(1)}
          >
            All
          </button>
          <button
            className={
              toggleState === 2 ? "tabs active-tabs tabs-btn" : "tabs tabs-btn"
            }
            onClick={() => toggleTab(2)}
          >
            Active
          </button>
          <button
            className={
              toggleState === 3 ? "tabs active-tabs tabs-btn" : "tabs tabs-btn"
            }
            onClick={() => toggleTab(3)}
          >
            Completed
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <AllTodos setTodos={setTodos} todos={todos} />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Active />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Completed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
