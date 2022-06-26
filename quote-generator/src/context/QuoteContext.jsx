import { createContext, useState } from "react";

export const QuoteContext = createContext();
export function QuoteProvider({ children }) {
  const API_URL = "https://quote-garden.herokuapp.com/api/v3/quotes";
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState([]);
  const [authorQuotes, setAuthorQuotes] = useState([]);

  const getRandomQuote = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL + "/random");
      const data = await response.json();
      setQuote(data.data);
    } catch (error) {
      setIsLoading(false);
      setQuote(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAuthorQuotes = async (author) => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL + `?author=${author}&limit=5`);
      const data = await response.json();
      setAuthorQuotes(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const values = {
    quote,
    isLoading,
    authorQuotes,
    getRandomQuote,
    getAuthorQuotes,
  };

  return (
    <QuoteContext.Provider value={values}>{children}</QuoteContext.Provider>
  );
}

export default QuoteContext;
