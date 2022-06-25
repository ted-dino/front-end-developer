import { useContext } from "react";
import TodoContext from "./context/TodoContext";
import AllTodos from "./component/AllTodos";
import Active from "./component/Active";
import Completed from "./component/Completed";

function App() {
  const { toggleState, toggleTab } = useContext(TodoContext);
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
            <AllTodos />
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
