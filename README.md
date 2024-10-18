<b>Atmosphere Weather App</b>

This is a weather application built with Next.js 14.2.14 It uses the OpenWeatherMap API to fetch current weather information for any location and updates the website background image based on the weather condition.
Features

  Get real-time weather updates by city name.
  Displays temperature, humidity, and weather conditions.
  Shows additional data like "feels like" temperature, dew point, visibility, and wind information.
  Provides an hourly forecast and a 6-day forecast.
  Displays the UV index for safety precautions.
  Responsive design that works on all devices.

<b>Technologies Used</b>

  Next.js 14.2.14 – JavaScript framework for server-side rendering and React-based front-end.
  SCSS – For styling and responsive design.
  OpenWeatherMap API – For fetching weather data.

<b>Installation</b>

  Clone the repository:

    git clone https://github.com/your-username/weather-app.git
    cd weather-app

  Install the dependencies:

    npm install

  Run the development server:

    npm run dev

  Open http://localhost:3000 in your browser to see the app in action.

<b>How to Use</b>

  Enter a city name in the search bar to get real-time weather information.
  The app will display the current temperature, "feels like" temperature, humidity, dew point, wind speed, visibility, and a brief description   of the weather.
  The hourly forecast and 6-day forecast will give you a overview of future weather conditions.
  The UV index is displayed to help you gauge sun exposure risks.

<b>API</b>

The app fetches data from the OpenWeatherMap API. You can sign up and get your API key from OpenWeatherMap.

  NOTE: The default limit of the request numbers is 2000, but for the free plan, the limit is 1000 requests per month.
  API Base URL: https://api.openweathermap.org/data/3/weather
  API Key: You will need your API key to access the weather data.
  Addint API key:
      -Make in your root directory ".env.local" file.
      -Make a new variable in the following name: "NEXT_PUBLIC_API_KEY".
      -Add your API key in it.

<b>Deployment</b>

To deploy the app, you can follow the instructions for your preferred hosting platform, such as:

  Vercel: You can deploy the app with one click on Vercel.
  Netlify: Another option for easy deployment.

<b>License</b>

This project is licensed under the MIT License. You can find more details in the LICENSE file.