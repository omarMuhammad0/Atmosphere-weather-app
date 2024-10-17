export default async function getCoordinates(cityName, APIKey) {
    //check the city name if falsy
    if(!cityName) return console.error(`Error getting city name`);

    let result;

    //get coordinates of the given city name
    try {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}`);

        //check if the resppnse is ok
        if (!res.ok) {
            if (res.status === 404) return console.error(`City not found`);
            else {
                return console.error(`<Failed to get coordinates>`, res.statusText);
            }
        }

        const data = await res.json();

        //check if data is empty
        if(data.length === 0) return console.error("No coordinates found for the city");

        result =  {
            lat: data[0].lat,
            lon: data[0].lon
        };        
    }
    catch(err) {
        return console.error(`<Error getting coordinates>`, err);
    }

    //getting the official city name.
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${result.lat}&lon=${result.lon}&appid=${APIKey}`);

        //check if the resppnse is ok
        if (!res.ok) {
            if (res.status === 404) return console.error(`Official city name not found`);
            else {
                return console.error(`<Failed to get the official city name>`, res.statusText);
            }
        }

        const data = await res.json();

        //check if data is empty
        if(!data || !data.sys.country || !data.name) return console.error("No official city name found for the coordinates");

        const officialCityName = `${data.sys.country} - ${data.name}`;

        result = {
            ...result,
            officialCityName
        }
    }
    catch(err) {
        console.error("<Couldn't get the official city name")
    }
    
    return result;
}