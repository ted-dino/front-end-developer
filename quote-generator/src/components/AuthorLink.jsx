import { useContext } from "react";
import QuoteContext from "../context/QuoteContext";
import rightArrow from "../asset/right-arrow.svg";
import { Link } from "react-router-dom";

const AuthorLink = () => {
  const { quote, getAuthorQuotes } = useContext(QuoteContext);

  const handleClick = () => {
    getAuthorQuotes(quote[0].quoteAuthor);
  };

  return (
    <>
      {quote && quote.length > 0 && (
        <>
          <Link
            to={`/author/${quote[0].quoteAuthor}`}
            className="author-link d-flex"
            onClick={handleClick}
          >
            <div>
              <span className="author-name">{quote[0].quoteAuthor}</span>
              <span className="quote-genre">{quote[0].quoteGenre}</span>
            </div>
            <div>
              <img src={rightArrow} alt="/" />
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default AuthorLink;
