import React, { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./utils/Constants";
import { MapWithPopup } from "./Components/MapWithPopup";
import { Navbar } from "./Components/Navbar";

function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  //gets weather info from backend
  async function fetchWeatherData() {
    return fetch(`${URL}?page=1&per_page=10`)
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
    let interval = setInterval(() => {
      console.log("interval", interval);
      fetchWeatherData();
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
