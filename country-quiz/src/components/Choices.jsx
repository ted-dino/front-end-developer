const Choices = ({ index, name }) => {
  let letter;
  switch (true) {
    case index === 0:
      letter = "A";
      break;
    case index === 1:
      letter = "B";
      break;
    case index === 2:
      letter = "C";
      break;
    case index === 3:
      letter = "D";
      break;
    default:
      break;
  }
  return (
    <div className="question__choice">
      <button className="d-flex align-center btn-choice">
        <span className="choice-letter">{letter}</span>
        <span className="choice-answer">{name}</span>
      </button>
    </div>
  );
};

export default Choices;
