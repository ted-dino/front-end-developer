const Choices = ({ index, name, checkAnswer }) => {
  const letter = ["A", "B", "C", "D"];

  return (
    <div className="question__choice">
      <button className="d-flex align-center btn-choice" onClick={checkAnswer}>
        <span className="choice-letter">{letter[index]}</span>
        <span className="choice-answer">{name}</span>
      </button>
    </div>
  );
};

export default Choices;
