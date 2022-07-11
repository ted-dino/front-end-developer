import { useState, useEffect } from "react";
import Question from "./components/Question";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,capital,flag"
      );
      const data = await response.json();
      const filteredData = data.filter(
        (country) => country.capital && country.capital !== country.name
      );
      setCountries(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>{countries.length > 0 && <Question countries={countries} />}</main>
  );
};

export default App;
