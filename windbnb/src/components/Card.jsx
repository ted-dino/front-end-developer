import { FaStar } from "react-icons/fa";

const Card = ({ image, isHost, beds, type, rating, title }) => {
  return (
    <div className="card flex justify-between flex-col">
      <div className="card__image mb-3.5">
        <a href={image} target="_blank">
          <img
            className="w-full rounded-3xl h-64 object-cover hover:opacity-75"
            src={image}
            alt="feature image"
          />
        </a>
      </div>
      <div className="card__details flex justify-between items-center">
        {isHost && (
          <span className="p-1.5 rounded-full border-[1px] border-accent font-bold text-xs">
            Super Host
          </span>
        )}
        <span className="text-sm text-secondary font-medium">
          {beds && isHost ? `${type} ${beds} beds` : type}
        </span>
        <span className="flex items-center gap-1">
          <FaStar className="fill-btn-primary" />
          {rating}
        </span>
      </div>
      <div className="card__title">
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
