import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import weathers from "../../services/weather";

const Weather = ({ countriesShow }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weather();
  }, []);

  const weather = async () => {
    try {
      const response = await weathers.getWeatherData(
        countriesShow[0].capital[0]
      );
      setWeatherData(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Wheater in {countriesShow[0].capital[0]}</h2>
      <p>temperature {weatherData.main.temp} Celcius</p>
      <figure>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt=""
        />
      </figure>
      <p>wind {weatherData.wind.speed} m/s</p>
    </>
  );
};

Weather.propTypes = {
  countriesShow: PropTypes.array.isRequired,
};

export default Weather;
