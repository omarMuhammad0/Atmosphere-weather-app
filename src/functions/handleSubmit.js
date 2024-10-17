import getCoordinates from "./getCoordinates";

export default async function handleSubmit(event, input, cityName, passCoordinates, APIKey) {
    event.preventDefault();

    if(!cityName) return console.error(`Please add a city name`);

    try {
        const coordinates = await getCoordinates(cityName, APIKey);
        
        passCoordinates(coordinates); //pass the taken coordinates to page.js
        input.blur()
    }
    catch(err) {
        console.error(`<Error getting city coordinates>`, err);
    }
}