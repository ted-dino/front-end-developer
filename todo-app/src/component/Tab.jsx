import { useEffect, useState } from "react";
import AllTodos from "./AllTodos";

export const Tab = () => {
  const activeTab = localStorage.getItem("activeTab");
  const [toggleState, setToggleState] = useState(
    activeTab ? parseInt(activeTab) : 1
  );

  useEffect(() => {
    localStorage.setItem("activeTab", toggleState);
  }, [toggleState]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div id="todo-container">
      <div className="d-flex">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Active
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Completed
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <AllTodos />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          Active
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          Completed
        </div>
      </div>
    </div>
  );
};
