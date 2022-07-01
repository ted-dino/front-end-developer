const Question = () => {
  return (
    <div id="container" className="question">
      <div className="question__title">
        <img src="https://flagcdn.com/w320/pe.png" alt="flag" />
        <h2>Which country does this flag belong to?</h2>
      </div>
      <div className="question__choices d-flex">
        <div className="question__choice">
          <button className="d-flex align-center">
            <span className="choice-letter">A</span>
            <span className="choice-answer">Vietnam</span>
          </button>
        </div>
        <div className="question__choice">
          <button className="d-flex align-center">
            <span className="choice-letter">B</span>
            <span className="choice-answer">Finland</span>
          </button>
        </div>

        <div className="question__choice">
          <button className="d-flex align-center">
            <span className="choice-letter">C</span>
            <span className="choice-answer">Sweden</span>
          </button>
        </div>

        <div className="question__choice">
          <button className="d-flex align-center">
            <span className="choice-letter">D</span>
            <span className="choice-answer">Austria</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
