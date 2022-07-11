import { useEffect, useState } from "react";

const Choices = ({ index, name, correctAnswer }) => {
  const letter = ["A", "B", "C", "D"];
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    setIsAnswered(false);
    setIsCorrect(false);
    setIsWrong(false);
  }, [correctAnswer]);

  const correctAnswerHandler = () => {
    if (correctAnswer === name) {
      setIsCorrect(true);
      console.log("correct");
    }
    if (correctAnswer !== name) {
      setIsWrong(true);
      console.log("wrong");
    }
    setIsAnswered((prevState) => !prevState);
  };

  const showCorrectAnswer = () => {
    if (!isCorrect && correctAnswer === name) {
      setIsCorrect(true);
    }
  };

  return (
    <button
      onClick={!isAnswered ? correctAnswerHandler : showCorrectAnswer()}
      className={
        isCorrect
          ? "d-flex align-center btn-choice correct-answer"
          : isWrong
          ? "d-flex align-center btn-choice incorrect"
          : "d-flex align-center btn-choice"
      }
    >
      <span className="choice-letter">{letter[index]}</span>
      <span className="choice-answer">{name}</span>
    </button>
  );
};

export default Choices;
