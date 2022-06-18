import { useState, useEffect, useContext } from "react";
import FilterContext from "./context/FilterContext";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const { items } = useContext(FilterContext);

  return (
    <main className="md:container mx-auto">
      <Navbar />
      <section>
        <h1 className="text-2xl font-bold text-primary mb-6">
          Stays in Finland
        </h1>
        <div className="grid gap-8 md:grid-cols-3 auto-rows-max">
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
  );
}

export default App;
