import { useState, useEffect } from "react";

import "./App.css";
import Question from "./components/Question";

function App() {
  const [countries, setCountries] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Country quiz</h1>
      {countries.length > 0 && <Question countries={countries} />}
    </main>
  );
}

export default App;
