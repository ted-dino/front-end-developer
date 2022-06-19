import { useState, useEffect, useContext } from "react";
import FilterContext from "./context/FilterContext";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const { items, location } = useContext(FilterContext);

  return (
    <>
      <main className="container mx-auto px-5 flex-1">
        <Navbar />
        <section>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary">
              {location ? `Stays in ${location}` : "Stays in Finland"}
            </h1>
            <span>{`${items.length} stays`}</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((stay, id) => (
              <Card
                key={id}
                image={stay?.photo}
                isHost={stay?.superHost}
                beds={stay?.beds}
                type={stay?.type}
                rating={stay?.rating}
                title={stay?.title}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center mt-10 mb-3 text-accent">
        created by &nbsp;
        <a className="underline font-bold" href="https://github.com/ted-dino">
          Ted Dino
        </a>
        &nbsp; - devchallenges.io
      </footer>
    </>
  );
}

export default App;
