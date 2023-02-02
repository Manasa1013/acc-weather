import React, { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./utils/Constants";
import { MapWithPopup } from "./Components/MapWithPopup";
import { Navbar } from "./Components/Navbar";

function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  //gets weather info from backend
  async function fetchWeatherData(pageNumber) {
    return fetch(`${URL}?page=${pageNumber}&per_page=10`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res, "at fetchWeather Data");
        setWeatherInfo(res.data);
      })
      .catch((err) => console.error("error in fetching data"));
  }
  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeatherData(1);
      fetchWeatherData(2);
      fetchWeatherData(3);
    }, 300000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <MapWithPopup weatherInfo={weatherInfo} />
    </div>
  );
}

export default App;
