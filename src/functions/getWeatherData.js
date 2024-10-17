export default async function getWeatherData(coordinates, APIKey) {
    if (!coordinates) return console.error(`Error getting coordinates`);

    try {
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKey}`);

        //check if the resppnse is ok
        if (!res.ok) {
            if (res.status === 404) return console.error(`Weather data not found`);
            else {
                return console.error(`<Failed to get weather data>`, res.statusText);
            }
        }

        const data = await res.json();

        //check if data is empty
        if(data.length === 0) return console.error("No weather data found for the city");
        
        return data;
    }
    catch(err) {
        console.error(`<Error getting weather data>`, err);
    }
return console.error(`Couldn't get weather data`);
}