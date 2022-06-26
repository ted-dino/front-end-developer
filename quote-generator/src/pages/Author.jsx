import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import QuoteContenxt from "../context/QuoteContext";
import Quote from "../components/Quote";
import Spinner from "../components/Spinner";
import leftArrow from "../asset/left-arrow.svg";

const Author = () => {
  const { authorName } = useParams();
  const { authorQuotes, isLoading } = useContext(QuoteContenxt);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/">
            <h1 className="quote-author d-flex" style={{ gap: "10px" }}>
              <span>
                <img src={leftArrow} alt="/" />
              </span>
              {authorName}
            </h1>
          </Link>
          {authorQuotes &&
            authorQuotes.length > 0 &&
            authorQuotes.map((quote, index) => {
              return <Quote key={index} quote={quote.quoteText} />;
            })}
        </>
      )}
    </div>
  );
};

export default Author;
