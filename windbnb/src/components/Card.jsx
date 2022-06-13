import { FaStar } from "react-icons/fa";
const Card = ({ image, isHost, beds, type, rating, title }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          className="w-full rounded-3xl h-64 object-cover"
          src={image}
          alt="feature image"
        />
      </div>
      <div className="card__details flex justify-between">
        {isHost && <span>Super Host</span>}
        <span>{beds && isHost ? `${type} ${beds} beds` : type}</span>
        <span className="flex items-center gap-1">
          <FaStar className="fill-btn-primary" />
          {rating}
        </span>
      </div>
      <div className="card__title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
