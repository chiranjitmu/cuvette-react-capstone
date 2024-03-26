import React, { useEffect, useState } from "react";
import { FaThermometerHalf } from "react-icons/fa";
import { WiCloudyGusts } from "react-icons/wi";
import { TbDropletHalf2Filled } from "react-icons/tb";
import { IoIosSunny } from "react-icons/io";
import "./Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const fetchData = () => {
    fetch(
      `https://api.tomorrow.io/v4/weather/forecast?location=12.9667611,77.5821692&apikey=${
        import.meta.env.VITE_WEATHER_APIKEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString("en-US")}`;
    const formattedTime = `${currentDate.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    })}`;

    setDate(formattedDate);
    setTime(formattedTime);
  }, []);

  return (
    <section className="weather-container">
      <div className="weather-datetime">
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="weather-data">
        {weatherData ? (
          <>
            <div className="weather-dataone">
              <IoIosSunny className="temperatureshown-icon" />
              <span>
                {weatherData.timelines.daily[0].values.temperatureAvg > 20
                  ? "Sunny"
                  : "Winter"}
              </span>
            </div>
            <hr className="vertical-line" />
            <div className="weather-datatwo">
              <span className="temperature">
                {" "}
                {weatherData.timelines.daily[0].values.temperatureAvg.toFixed(
                  0
                )}
                {String.fromCharCode(176)}C
              </span>
              <div className="datatwo-inside">
                <FaThermometerHalf className="temperature-icon" />
                <div className="datatwo-pressure">
                  <span>
                    {weatherData.timelines.daily[0].values.pressureSurfaceLevelAvg.toFixed(
                      0
                    )}{" "}
                    mbar
                  </span>
                  <span>Pressure</span>
                </div>
              </div>
            </div>
            <hr className="vertical-line" />
            <div className="weather-datathree">
              <div className="datathree-inside">
                <WiCloudyGusts className="wind-icon" />
                <div className="datathree-wind">
                  <span>
                    {weatherData.timelines.daily[0].values.windGustAvg} km/h
                  </span>
                  <span>Wind</span>
                </div>
              </div>
              <div className="datathree-inside">
                <TbDropletHalf2Filled className="humidity-icon" />
                <div className="datathree-humidity">
                  <span>
                    {" "}
                    {weatherData.timelines.daily[0].values.humidityAvg.toFixed(
                      0
                    )}
                    %
                  </span>
                  <span>Humidity</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
};

export default Weather;
