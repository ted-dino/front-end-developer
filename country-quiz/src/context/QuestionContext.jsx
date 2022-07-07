import { createContext, useEffect, useState } from "react";

export const QuestionContext = createContext();
export function QuestionProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [randomCity, setRandomCity] = useState([]);
  const [choices, setChoices] = useState([]);

  const shuffleArray = (array) => {
    const shuffledArray = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffledArray;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,capital,flag"
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
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
  useEffect(() => {
    fetchData();
  }, []);

  const values = { countries };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
}

export default QuestionContext;
