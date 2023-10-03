import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import axois from "axios";

function App() {
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const [data, setData] = useState([]);

  const getWeather = async (event) => {
    event.preventDefault();
    //   const cityName = document.querySelector("#cityName").value;
    // console.log(`getting weather of ${cityName}...`); //not preferable
    console.log(`getting weather of ${inputRef.current.value}...`); //not preferable

    try {
      setIsLoading(true);

      const response =
        await axois.get(`http://api.weatherapi.com/v1/current.json?key=6bee461c884741d9b1594850230310&q=${inputRef.current.value}&aqi=no
    `);
      console.log("response:", response.data);

      setIsLoading(false);
      // data.push(response.data)

      //  const clone = [...data]
      //  clone.push(response.data)

      setData([...data, response.data]);
      console.log(data);
    } catch (e) {
      setIsLoading(false);

      console.log(e);
    }
  };
  const changeHandler = (event) => {
    setCityName(event.target.value);
    // console.log("change handler:", event.target.value);
  };

  return (
    <div>
      <h1>weather App</h1>

      <form onSubmit={getWeather}>
        <label htmlFor="cityName">City:</label>
        <input
          type="text"
          id="cityName"
          maxLength={20}
          minLength={2}
          required
          placeholder="enter your city name"
          onChange={changeHandler}
          ref={inputRef}
        />
        <br /> <br />
        <button type="submit">Get Weather</button>
      </form>

      <br />
      <br />
      <hr />
      <br />

      {isLoading ? <div>Loading...</div> : null}

      {data.length ? (
        data.map((eachWeatherData, index) => (
          <div>
            cityName:{eachWeatherData?.location?.name}{" "}
            {eachWeatherData?.location?.country}
            <br />
            temp:{eachWeatherData?.current?.temp_c}
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}

export default App;
