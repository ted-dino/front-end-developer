import Home from "./pages/Home";
import Author from "./pages/Author";
import randomIcon from "./asset/renew.svg";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useContext } from "react";
import QuoteContext from "./context/QuoteContext";

function App() {
  const { authorName } = useParams();
  const { getRandomQuote } = useContext(QuoteContext);

  const handleClick = () => {
    console.log(authorName);
    getRandomQuote();
  };
  return (
    <BrowserRouter>
      <div id="container" className="d-flex flex-col min-h-screen">
        <button className="btn" onClick={handleClick}>
          <span>random</span>
          <img src={randomIcon} alt="/" />
        </button>
        <main className="flex-1 d-flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/author/:authorName" element={<Author />} />
          </Routes>
        </main>
        <footer>
          created by &nbsp;
          <a href="https://github.com/ted-dino">Ted Dino</a>
          &nbsp; - devchallenges.io
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
