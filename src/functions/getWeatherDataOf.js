export default function getWeatherDataOf(data, identifier, unites) {

    if(!data) return console.error(`Error getting weather data`);

    if(identifier == "current") {

        const temps = {
            temp: converUnite(data.current.temp, unites.tempUnite),
            feelsLike: converUnite(data.current.feels_like, unites.tempUnite),
            dewPoint: converUnite(data.current.dew_point, unites.tempUnite),
            windDeg: converUnite(data.current.wind_deg, unites.tempUnite)
        }
        let visibility = visibilityUnite(data.current.visibility, unites.visibilityAndWindUnite);
        let windSpeed = windSpeedUnite(data.current.wind_speed, unites.visibilityAndWindUnite);
        let windGust = windSpeedUnite(data.current.wind_gust, unites.visibilityAndWindUnite);

        const options = { day: "numeric", month: "numeric" };
        const date = new Date(data.current.dt * 1000).toLocaleDateString(undefined, options);

        const result = {
            timeZone: data.timezone.split("/")[1],
            date: date,
            temp: temps.temp,
            feelsLike: temps.feelsLike,
            humidity: `${data.current.humidity}%`,
            dewPoint: temps.dewPoint,
            UVI: data.current.uvi,
            visibility: visibility,
            windSpeed: windSpeed,
            windGust: windGust,
            weatherInf: data.current.weather[0].description,
            iconCode: data.current.weather[0].icon
        }
        return result;
    }
    if(identifier == "hourly") {
        let result = [];
        const options = { hour: "numeric", minute: "numeric" , hour12: true };
        
        for(let i = 0; i < 6; i++) {
            const date = new Date(data.hourly[i].dt * 1000).toLocaleTimeString(undefined,  options);

            let hourlyData = {
                date,
                temp: converUnite(data.hourly[i].temp, unites.tempUnite),
                iconCode: data.hourly[i].weather[0].icon
            }
            result.push(hourlyData);
        }
        return result;
    }
    if(identifier == "daily") {
        let result = [];
        const options = { day: "numeric", month: "numeric" };
        
        for(let i = 0; i < 6; i++) {
            const date = new Date(data.daily[i].dt * 1000).toLocaleDateString(undefined,  options);
            const day = new Date(data.daily[i].dt * 1000).toLocaleDateString(undefined,  { weekday: "long" });

            let dailyData = {
                date,
                day,
                temp: converUnite(data.daily[i].temp.day, unites.tempUnite),
                iconCode: data.daily[i].weather[0].icon
            }
            result.push(dailyData);
        }
        return result;
    }
}

function converUnite(data, unite) {
    if (unite.toLowerCase() === "c") {
        return `${Math.floor(data - 273.15)}°C`;
    }
    if (unite.toLowerCase() === "f") {
        return `${Math.floor((data - 273.15) * 9/5 +32)}°F`;
    }
}

function visibilityUnite(data, unite) {
    if (unite.toLowerCase() == "mi") {
        let result = Math.floor(data * 0.000621371);
        if(data === 10000) return `${result}mi+`
        return result < 1 ? `${result * 5.280}ft` : `${result}mi`;
    }
    if (unite.toLowerCase() == "km") {
        if(data === 10000) return `${Math.floor(data / 1000)}km+`
        return data < 1000 ? `${Math.floor(data)}m` : `${Math.floor(data / 1000)}km`;
    }
}

function windSpeedUnite(data, unite) {
    if(unite.toLowerCase() == "mi") {
        return `${Math.floor(data * 0.621371)}`;
    }
    if(unite.toLowerCase() == "km") {
        return `${Math.floor(data)}`;
    }
}