import stays from "../stays.json";
import Card from "./Card";

const StayList = () => {
  return (
    <section>
      <h1>Stays in Finland</h1>
      <div className="grid gap-8 md:grid-cols-3 auto-rows-max">
        {stays.map((stay, id) => (
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
