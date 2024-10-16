
import "@/style/cards/wind/wind.css";
export default function WindCard({ data }) {
    return (
        <div className="wind">
            <div className="title">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                    <path d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Wind</span>
            </div>
            <div>
                <hr />
            </div>
            <div className="seperator">
                <div className="main">
                    <div className="wind-unit">
                        <div className="value">{data.windSpeed}</div>
                        <div className="unit">
                            <span>MPH</span>
                            <span>Wind</span>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div className="gusts">
                        <div className="value">{data.windGust}</div>
                        <div className="unit">
                            <span>MPH</span>
                            <span>Gusts</span>
                        </div>
                    </div>
                </div>
                <div className="img-holder">
                    <img src="/images/compass.png" alt="Compass-image" width="80px" />
                </div>
            </div>
        </div>
    )
}