import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Choices from "./Choices";
import QuestionHeader from "./QuestionHeader";

const Question = ({ countries }) => {
  const [randomCity, setRandomCity] = useState([]);
  const [choices, setChoices] = useState([]);
  const questionList = [
    "Which country does this flag belong to?",
    `${randomCity.capital} is the capital of?`,
  ];
  const randomQuestion =
    questionList[Math.floor(Math.random() * questionList.length)];

  const shuffleArray = (array) => {
    const shuffledArray = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffledArray;
  };

  const getRandomQuestion = () => {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
    setRandomCity(randomCountry);
    getChoices(randomCountry);

    console.log(randomCountry);
  };

  const getChoices = (randomQuestion) => {
    const countryNames = countries.map((country) => country.name);
    const shuffledChoices = [
      randomQuestion?.name,
      ...shuffleArray(countryNames).slice(0, 3),
    ];
    setChoices(shuffleArray(shuffledChoices));
  };

  useEffect(() => {
    if (countries.length > 0) {
      getRandomQuestion();
    }
  }, []);

  return (
    <>
      <h1>Country quiz</h1>
      <div id="container" className="question d-flex justify-center">
        {randomCity && randomCity.length !== 0 ? (
          <>
            <QuestionHeader question={randomQuestion} flag={randomCity.flag} />
            <div className="question__choices d-flex">
              {choices.map((choice, index) => (
                <Choices
                  key={index}
                  index={index}
                  name={choice}
                  correctAnswer={randomCity.name}
                />
              ))}

              <button onClick={(e) => getRandomQuestion()} className="btn-next">
                Next
              </button>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Question;
