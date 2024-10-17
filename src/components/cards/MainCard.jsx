import "@/style/cards/main-card/main-card.css";

export default function MainCard({ data, cityName }) {

    function airComfort(dewPoint) {

        if (dewPoint.includes('°C')) {
            dewPoint = parseFloat(dewPoint);
        } else if (dewPoint.includes('°F')) {
            dewPoint = (parseFloat(dewPoint) - 32) * 5 / 9;  // Convert to Celsius
        }

        let result;

        switch (true) {
            case dewPoint < 10:
                result = `Very dry air`;
                break;
            case dewPoint >= 10 && dewPoint <= 12:
                result = `Low humidity, comfortable air.`;
                break;
            case dewPoint >= 13 && dewPoint <= 16:
                result = `Slightly Humid, generally comfortable air.`;
                break;
            case dewPoint >= 17 && dewPoint <= 18:
                result = `Noticeably Humid, less comfortable air.`;
                break;
            case dewPoint >= 19 && dewPoint <= 21:
                result = `Very Humid, uncomfortable air.`;
                break;
            case dewPoint >= 22 && dewPoint <= 24:
                result = `Oppressive, The air feels heavy, making outdoor activity difficult.`;
                break;
            case dewPoint >= 25:
                result = `Extremely Uncomfortable, The air feels very uncomfortable, Physical exertion becomes difficult, and the risk of heat-related issues.`;
                break;
            default:
                result = `Invalid dew point value`;
        }
        return result;
    }
    function visionQuality(visibility) {
        let result;

        const value = parseFloat(visibility);
    
        if (visibility.includes("km")) {
            switch (true) {
                case value >= 10:
                    result = `Excellent Vision`;
                    break;
                case value >= 5 && value < 10:
                    result = `Good Vision`;
                    break;
                case value >= 1 && value < 5:
                    result = `Moderate Vision`;
                    break;
                default:
                    result = `Poor Vision`;
            }
        } else if (visibility.includes("mi")) {
            switch (true) {
                case value >= 6:
                    result = `Excellent Vision`;
                    break;
                case value >= 3 && value < 6:
                    result = `Good Vision`;
                    break;
                case value >= 1 && value < 3:
                    result = `Moderate Vision`;
                    break;
                default:
                    result = `Poor Vision`;
            }
        } else if (visibility.includes("m") || visibility.includes("ft")) {
            result = `Poor Vision`;
        } else {
            result = `Invalid visibility format`;
        }
    
        return result;
    }
    

    return (
        <div className="main-card">
            <div className="title">
                <h2>{cityName}</h2>
                <span className="date">{data.date}</span>
            </div>
            <div className="holder">
                <div className="main">
                    <div className="temp">
                    <img src={`http://openweathermap.org/img/wn/${data.iconCode}@2x.png`} alt="Icon" />
                        <span>{data.temp}</span>
                    </div>
                    <span className="weather-inf">{data.weatherInf}</span>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="title">
                            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" href="http://www.w3.org/2000/svg" viewBox="0 0 180.146 180.146"><g>
                                <path d="M116.707,104.542V26.631C116.707,11.947,104.758,0,90.07,0C75.386,0,63.438,11.947,63.438,26.631v77.912   c-10.013,8.046-15.879,20.134-15.879,33.09c0,23.442,19.07,42.514,42.511,42.514c23.443,0,42.517-19.072,42.517-42.514   C132.587,124.676,126.72,112.588,116.707,104.542z M90.07,165.146c-15.17,0-27.511-12.343-27.511-27.514   c0-9.282,4.669-17.882,12.489-23.007c2.115-1.386,3.39-3.744,3.39-6.273V26.631C78.438,20.218,83.656,15,90.07,15   c6.417,0,11.637,5.218,11.637,11.631v81.722c0,2.529,1.274,4.887,3.39,6.273c7.821,5.124,12.49,13.725,12.49,23.007   C117.587,152.804,105.243,165.146,90.07,165.146z"/>
                                <path d="M95.07,120.859V60.268c0-2.761-2.238-5-5-5c-2.762,0-5,2.239-5,5v60.591c-7.229,2.152-12.505,8.84-12.505,16.773   c0,9.667,7.838,17.507,17.505,17.507c9.673,0,17.51-7.84,17.51-17.507C107.58,129.699,102.304,123.011,95.07,120.859z"/></g>
                            </svg>
                            <span>Feels Like</span>
                        </div>
                        <div className="main-inf">{data.feelsLike}</div>
                    </div>

                    <div className="card">
                        <div className="title">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M9.40192 13.5C9.66523 13.9561 10.0439 14.3348 10.5 14.5981C10.9561 14.8614 11.4734 15 12 15C12.5266 15 13.0439 14.8614 13.5 14.5981C13.9561 14.3348 14.3348 13.9561 14.5981 13.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                            <rect x="6.875" y="7.875" width="3.25" height="2.25" rx="1.125" fill="#33363F" stroke="#33363F" strokeWidth="0.25" strokeLinecap="round"/>
                            <rect x="13.875" y="7.875" width="3.25" height="2.25" rx="1.125" fill="#33363F" stroke="#33363F" strokeWidth="0.25" strokeLinecap="round"/>
                            </svg>
                            <span>Dew point</span>
                        </div>
                        <div className="main-inf">{data.dewPoint}</div>
                        <div className="more-inf">
                        {airComfort(data.dewPoint)}
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                                <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" strokeWidth="1.5"/>
                            </svg>
                            <span>Visibility</span>
                        </div>
                        <div className="main-inf">{data.visibility}</div>
                        <div className="more-inf">
                            {visionQuality(data.visibility)}
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                                <g id="Environment / Water_Drop">
                                <path id="Vector" d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>
                            </svg>
                            <span>Humidity</span>
                        </div>
                        <div className="main-inf">{data.humidity}</div>
                        <div className="more-inf">
                            Humidity makes the temp warmer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 