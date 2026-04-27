import React, { useState } from 'react'

export default function Weather() {
    const[city,setcity] = useState("");
    const [weather, setWeather] = useState(null);
    const handlecitychange =(event)=>{
        setcity(event.target.value);
    }
    const fetchweather=async()=>{
     try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'fbcc86df5477b61c1ceac2d2f994f779'}&units=metric`);
        const data = await response.json();
        console.log(data);
        setWeather(data);
        }   
        catch(error){
            console.log(error);
        }
    }
    const handleclick=()=>{
        fetchweather(); 
    }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='City?' value={city} onChange={handlecitychange}/>
        <button onClick={handleclick}>Wheather is</button>
        {weather &&(
        <div className='weather-info'>
            <h2>{weather.name}</h2>
          <h2>{weather.main.temp}</h2>
            <p>Temperature is {weather.main.temp}`Celsius</p>
            <p>{weather.weather[0].description}</p>
        </div>
        )
        }
    </div>
  )
}
  