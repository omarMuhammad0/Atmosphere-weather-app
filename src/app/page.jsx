"use client"
import { useState, useEffect } from 'react'

import DaysForecast from "@/components/cards/DaysForecast";
import HourlyForecast from "@/components/cards/HourlyForecast";
import MainCard from "@/components/cards/MainCard";
import UVindex from "@/components/cards/UVindex";
import WindCard from "@/components/cards/WindCard";
import Menu from "@/components/header/Menu";
import Search from "@/components/header/Search";


import "@/style/main/main.css";
import getWeatherData from '@/functions/getWeatherData';
import getWeatherDataOf from '@/functions/getWeatherDataOf';

export default function Home() {

  
  const APIKey = process.env.NEXT_PUBLIC_API_KEY;
  const [coordinates, setCoordinates] = useState(null);
  const [validCity, setValidCity] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [unites, setUnites] = useState({
    tempUnite: "c",
    visibilityAndWindUnite: "km"
  });

  const getCoordinatesFromChild = (data) => {
    setCoordinates(data);
  }

  useEffect(() => {
    if(!coordinates) {
      setValidCity(false);
      return;
    }
    
    setValidCity(true);

    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(coordinates, APIKey);

        setWeatherData({
          current: getWeatherDataOf(data, "current", unites),
          hourly: getWeatherDataOf(data, "hourly", unites),
          daily: getWeatherDataOf(data, "daily", unites),
        });
      }
      catch(err) {
        console.error(`<Error getting weather data>`, err)
      }
    }
    fetchWeatherData();
  }, [coordinates, unites, APIKey]);
  
  return (
    <div className="body">
      <div className="container">
        <header className="main-header">
          <div className="logo">Atmosphere</div>
          <Search className="search"
            passCoordinates={getCoordinatesFromChild}
            APIKey={APIKey}
          />
          <Menu className="menu" />
        </header>
        <header className="mobile-header">
          <div className="first-holder">
            <div className="logo">Atmosphere</div>
            <Menu className="menu" />
          </div>
          <div className="second-holder">
            <Search className="search"
              passCoordinates={getCoordinatesFromChild}
              APIKey={APIKey}
            />
          </div>
        </header>
        {validCity && weatherData && 
        <section>
        <MainCard data={weatherData.current} cityName={coordinates.officialCityName}/>
        <div className="secondary-cards">
          <HourlyForecast data={weatherData.hourly} />
          <DaysForecast data={weatherData.daily} />
          <div className="holder">
            <UVindex data={weatherData.current} />
            <WindCard data={weatherData.current} />
          </div>
        </div>
      </section>
        }
        </div>
    </div>
  );
}