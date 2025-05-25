import React, { useState } from "react";
import "./Weather.css";
function Weather() {
  const weatherData = [
    {
      City: "Durres",
      SkyConditions: "sunny Day",
      Temperature: " 30°C",
      WindSpeed: "1.14 km/h",
    },
    {
      City: "Tirane",
      SkyConditions: "clear sky",
      Temperature: "9.25°C",
      WindSpeed: "2.12 km/h",
    },
    {
      City: "Pogradec",
      SkyConditions: "rainy Day",
      Temperature: "5°C",
      WindSpeed: "7.76 km/h",
    },
    {
      City: "Kukes",
      SkyConditions: "snowy Day",
      Temperature: "-10°C",
      WindSpeed: "20.2 km/h",
    },
  ];
  const [weather, setWeather] = useState(weatherData);
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const handleWeather = () => {
    const findCity = weatherData.find((weather) => weather.City === city);
    if (!city) {
      setWeather(false);
      setMessage("Please enter city");
    } else if (!findCity) {
      setWeather(false);
      setMessage("Please enter a valid city");
    } else {
      setMessage(false);
      setWeather(findCity);
    }
  };
  return (
    <>
      <div className="oval-background-weather"></div>
      <input
        className="weather-input"
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn-weather" onClick={handleWeather}>
        Search
      </button>
      <section className="weather-container">
        <p className="message-p">{message}</p>
        <h3 className="weather-data-city"> {weather.City}</h3>
        <h3 className="weather-data-temp"> {weather.Temperature}</h3>
        <h3 className="weather-data-skycond">{weather.SkyConditions}</h3>
      </section>
    </>
  );
}

export default Weather;
