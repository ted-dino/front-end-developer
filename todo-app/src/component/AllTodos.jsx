const AllTodos = () => {
  return (
    <div>
      <form className="d-flex form">
        <div className="form-floating">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="add todo"
            className="form-control"
          />
          <label htmlFor="todo">Add Todo</label>
        </div>
        <button>add</button>
      </form>
    </div>
  );
};

export default AllTodos;
