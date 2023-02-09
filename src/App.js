import logo from './logo.svg';
import './App.css';
import Search from './search/search';
import CurrentWeather from './components/current-weather/current-weather';
import {WEATHER_API_URL,WEATHER_API_KEY} from "./api";
import { useState } from 'react';


function App() {

const [currentWeather, setCurrentWeather] = useState(null)




const handleOnSearchChange =(searchData) => {
const [lat,lon] = searchData.value.split(" ");

const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?${lat}={lat}&${lon}={lon}&appid=${WEATHER_API_KEY}`) 



const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?${lat}={lat}&${lon}={lon}&appid=${WEATHER_API_KEY}`) 

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


Promise.all([currentWeatherFetch, forecastFetch])
.then(async(response)=>{
  const weatherResponse = await  response[0].json();

  const forcastResponse = await  response[1].json();

})


} 



  return (
    <div className="container">
    
    <Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather/>
    </div>
  );
}

export default App;
