import "@/style/cards/hourly-forecast/hourly-forecast.css"

export default function HourlyForecast( { data }) {

    //getting the current hour
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    return (
        <div className="hourly-forecast">
            <div className="title">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>HOURLY FORECAST</span>
            </div>
            <hr />
            <div className="cards">
                <div className="card">
                    <span className="time">{data[0].date}</span>
                    <span className="temp">{data[0].temp}</span>
                    <img src={`http://openweathermap.org/img/wn/${data[0].iconCode}@2x.png`} alt="Icon" />
                </div>
                <div className="card">
                    <span className="time">{data[1].date}</span>
                    <span className="temp">{data[1].temp}</span>
                    <img src={`http://openweathermap.org/img/wn/${data[1].iconCode}@2x.png`} alt="Icon" />
                </div>
                <div className="card">
                    <span className="time">{data[2].date}</span>
                    <span className="temp">{data[2].temp}</span>
                    <img src={`http://openweathermap.org/img/wn/${data[2].iconCode}@2x.png`} alt="Icon" />
                </div>
                <div className="card">
                    <span className="time">{data[3].date}</span>
                    <span className="temp">{data[3].temp}</span>
                    <img src={`http://openweathermap.org/img/wn/${data[3].iconCode}@2x.png`} alt="Icon" />
                </div>
                <div className="card">
                    <span className="time">{data[4].date}</span>
                    <span className="temp">{data[4].temp}</span>
                    <img src={`http://openweathermap.org/img/wn/${data[4].iconCode}@2x.png`} alt="Icon" />
                </div>
                <div className="card">
                    <span className="time">{data[5].date}</span>
                    <span className="temp">{data[5].temp}</span>
                    <img src={`http://openweathermap.org/img/wn/${data[5].iconCode}@2x.png`} alt="Icon" />
                </div>
            </div>
            <progress max="24" value={currentHour}></progress>
        </div>
    )
}