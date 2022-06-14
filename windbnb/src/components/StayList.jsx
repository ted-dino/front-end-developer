import Card from "./Card";
import { useContext, useEffect } from "react";
import FilterContext from "../context/FilterContext";

const StayList = () => {
  const { items } = useContext(FilterContext);

  useEffect(() => {});
  return (
    <section>
      <h1 className="text-2xl font-bold text-primary mb-6">Stays in Finland</h1>
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
  );
};

export default StayList;
