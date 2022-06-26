import Quote from "../components/Quote";
import AuthorLink from "../components/AuthorLink";
import Spinner from "../components/Spinner";
import { useContext } from "react";
import QuoteContext from "../context/QuoteContext";

const Home = () => {
  const { quote, isLoading } = useContext(QuoteContext);

  return (
    <div className="qoute">
      {isLoading ? (
        <Spinner />
      ) : quote && quote.length > 0 ? (
        <>
          <Quote quote={quote[0].quoteText} />
          <AuthorLink />
        </>
      ) : (
        <h1>
          Click <em>random</em> to find a great quotation.
        </h1>
      )}
    </div>
  );
};

export default Home;
