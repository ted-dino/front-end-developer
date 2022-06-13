import Card from "./Card";
import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const StayList = () => {
  const { item } = useContext(FilterContext);
  return (
    <section>
      <h1>Stays in Finland</h1>
      <div className="grid gap-8 md:grid-cols-3 auto-rows-max">
        {item.map((stay, id) => (
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
