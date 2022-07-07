import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Choices from "./Choices";

const Question = ({ countries }) => {
  const [randomCity, setRandomCity] = useState([]);
  const [choices, setChoices] = useState([]);
  const questionList = [
    "Which country does this flag belong to?",
    `${randomCity?.capital} City is the capital of?`,
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
    try {
      const randomCountry =
        countries[Math.floor(Math.random() * countries.length)];
      setRandomCity(randomCountry);
      getChoices(randomCountry);
      console.log(randomCountry);
    } catch (error) {
      console.log(error);
    }
  };
  const getChoices = (randomQuestion) => {
    const countryNames = countries.map((country) => country.name);
    const shuffledChoices = [
      randomQuestion?.name,
      ...shuffleArray(countryNames).slice(0, 3),
    ];
    setChoices(shuffleArray(shuffledChoices));
  };

  const checkAnswer = (choice) => {
    if (randomCity.name === choice) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <div id="container" className="question d-flex justify-center">
      {randomCity.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <div className="question__title">
            {questionList.indexOf(randomQuestion) === 0 ? (
              <>
                <img src={randomCity.flag} alt={`${randomCity.flag} flag`} />
                <h2>Which country does this flag belong to?</h2>
              </>
            ) : (
              <h2>{randomQuestion}</h2>
            )}
          </div>
          <div className="question__choices d-flex">
            {choices.length > 0 &&
              choices.map((choice, index) => (
                <Choices
                  key={index}
                  index={index}
                  name={choice}
                  checkAnswer={() => checkAnswer(choice)}
                />
              ))}

            <button onClick={() => getRandomQuestion()} className="btn-next">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
