import { useState, useEffect } from "react";

import "./App.css";
import Question from "./components/Question";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState("");

  const fetchData = async () => {
    try {
      if (countries.length === 0) {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomQuestion = () => {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
    setCountry(randomCountry);
  };

  useEffect(() => {
    fetchData();
    getRandomQuestion();
  }, [countries]);

  return (
    <div className="App">
      <h1>Country quiz</h1>
      <Question />
    </div>
  );
}

export default App;
