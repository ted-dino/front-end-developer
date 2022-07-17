import iconHook from "../hooks/iconHook";

const WeatherIcon = ({ className, weatherIcon }) => {
  const { image } = iconHook(weatherIcon);

  return (
    <div>
      <img className={className} src={image} alt="weather condition icon" />
    </div>
  );
};

export default WeatherIcon;
