//select element need to change
import "./Weather.css";
import { Button, Input, Typography, Image } from "antd";
import { useEffect, useState } from "react";
const { Title } = Typography;

import visionIcon from "./imgs/vision-icon.png";
import windIcon from "./imgs/wind-icon.png";
import sunIcon from "./imgs/sun-icon.png";
// 4h30
// hwng Hao tue khanh tung le Long viet long hoang long

export default function Weather() {
  const [citySearch, getCitySearch] = useState("Ha Noi");
  const [cityDisplay, setCityDisplay] = useState("Ha Noi");
  const [country, setCountry] = useState("Viet Nam");
  const [temperature, setTemperature] = useState(24);
  // const [dataWeather, getDataWeather] = useState(null);
  const [view, setView] = useState(`10000 (m)`);
  const [windVelocity, setWindVelocity] = `2.38 (m/s)`;
  const [sunStatus, setSunStatus] = useState(`100 (%)`);
  const [weatherStatus, setWeatherStatus] = useState(`Cloud`);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
      setDate(time.getDate());
      setMonth(time.getMonth() + 1);
      setYear(time.getFullYear());
    }, 1000);
  });
  async function changeWeatherUI() {
    //get location of city latitude, longitude
    const cityLocation = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&limit=1&appid=29460cf0e991f8837a3d79babd4e6100`;
    const data = await fetch(cityLocation).then((res) => res.json());
    //use location to get weather
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=29460cf0e991f8837a3d79babd4e6100`;
    const weather = await fetch(apiURL).then((res) => res.json());
    // getDataWeather(weather);
    //change place
    setCityDisplay(data[0].name);
    setCountry(data[0].country);
    //change temperature
    setTemperature(
      Math.round((weather.main.temp - 273 + Number.EPSILON) * 100) / 100
    );
    //change status
    setWeatherStatus(`${weather.weather[0].main}`);
    //more infomation
    setView(`${weather.visibility} (m)`);
    setWindVelocity(`${weather.wind.speed} (m/s)`);
    setSunStatus(`${weather.clouds.all} (%)`);
  }

  useEffect(() => {
    console.log(citySearch);
  }, [citySearch]);
  return (
    <div
      className={
        temperature > 20 ? `weather-app bg-hot` : `weather-app bg-cold`
      }
    >
      <div id="weather" className={temperature > 20 ? `bg-hot` : `bg-cold`}>
        <Input
          defaultValue={"Ha Noi"}
          id="search-box"
          onChange={(e) => getCitySearch(e.target.value)}
        />
        <div>
          <h1 id="place">
            <spam id="city">{cityDisplay}</spam>,
            <span id="country">{country}</span>
          </h1>
          <h4 id="date-n-time">
            <Title level={2} style={{ marginTop: "2rem" }}>
              {hours < 10 ? `0${hours}` : `${hours}`}:
              {minutes < 10 ? `0${minutes}` : `${minutes}`}:
              {seconds < 10 ? `0${seconds}` : `${seconds}`}
            </Title>
            <Title level={2} style={{ marginTop: "2rem" }}>
              {date < 10 ? `0${date}` : `${date}`}/
              {month < 10 ? `0${month}` : `${month}`}/{year}
            </Title>
          </h4>
        </div>
        <span id="tempt">{temperature}°C</span>
        <h1 id="status">{weatherStatus}</h1>
        <div id="more-info">
          <div>
            <Image style={{ marginLeft: 35 }} src={visionIcon} />
            <span id="view">{view}</span>
          </div>
          <div>
            <Image style={{ marginLeft: 35 }} src={windIcon} />
            <span id="wind-velocity">{windVelocity}</span>
          </div>
          <div>
            <Image style={{ marginLeft: 35 }} src={sunIcon} />
            <span id="possibility-of-rain">{sunStatus}</span>
          </div>
        </div>
        <Button
          type="primary"
          style={{
            backgroundColor: temperature > 20 ? "#B35E1D" : "#4F4FB5",
            fontSize: 20,
            padding: "5px 30px",
            marginTop: 10,
            height: "auto",
          }}
          onClick={changeWeatherUI}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
