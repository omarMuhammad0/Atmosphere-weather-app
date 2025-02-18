<b>Atmosphere Weather App</b>

This is a weather application built with Next.js 14.2.14 It uses the OpenWeatherMap API to fetch current weather information for any location and updates the website background image based on the weather condition.

<b>Features</b>

  <ul>
  <li>Get real-time weather updates by city name.</li>
  <li>Displays temperature, humidity, and weather conditions.</li>
  <li>Shows additional data like "feels like" temperature, dew point, visibility, and wind information.</li>
  <li>Provides an hourly forecast and a 6-day forecast.</li>
  <li>Displays the UV index for safety precautions.</li>
  <li>Responsive design that works on all devices.</li>
  </ul>

<b>Technologies Used</b>

  <ul>
  <li>Next.js 14.2.14 – JavaScript framework for server-side rendering and React-based front-end.</li>
  <li>SCSS – For styling and responsive design.</li>
  <li>OpenWeatherMap API – For fetching weather data.</li>
  </ul>

<b>Installation</b>

  Clone the repository:

    git clone https://github.com/your-username/weather-app.git
    cd weather-app

  Install the dependencies:

    npm install

  Run the development server:

    npm run dev

  Open http://localhost:3000 in your browser to see the app in action.

<b>API</b>

The app fetches data from the OpenWeatherMap API. You can sign up and get your API key from OpenWeatherMap.<br/>

  API Base URL: https://api.openweathermap.org/data/3/weather<br/>
  API Key: You will need your API key to access the weather data.<br/>
  <br/>
  <b>Adding API key:</b>
  <ul>
    <li>Make in your root directory ".env.local" file.</li>
    <li>Make a new variable with the following name: "NEXT_PUBLIC_API_KEY".</li>
    <li>Add your API key to it.</li>
  </ul>

<b>Deployment</b>

To deploy the app, you can follow the instructions for your preferred hosting platform, such as:

  Vercel: You can deploy the app with one click on Vercel.<br/>
  Netlify: Another option for easy deployment.<br/>

<b>License</b>

This project is licensed under the MIT License. You can find more details in the LICENSE file.
