import "@/style/cards/main-card/main-card.css";

export default function MainCard() {
    return (
        <div className="main-card">
            <div className="title">
                <h2>Cairo</h2>
                <span className="date">08/10</span>
            </div>
            <div className="holder">
                <div className="main">
                    <div className="temp">
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" href="http://www.w3.org/2000/svg" viewBox="0 0 297 297"><g>
                            <path d="M174.64,128.312c0-28.018-22.772-51.622-50.79-51.622c-23.684,0-44.551,16.771-49.618,39.876   c-0.584,2.662-2.546,4.809-5.143,5.632c-15.113,4.784-25.267,18.655-25.267,34.519c0,4.208-3.41,7.618-7.618,7.618   C16.241,164.335,0,180.576,0,200.54c0,19.962,16.241,36.204,36.204,36.204h160.683c28.018,0,50.812-22.794,50.812-50.812   c0-28.017-22.794-50.811-50.812-50.811c-4.319,0-8.609,0.542-12.747,1.612c-2.318,0.6-4.789,0.073-6.664-1.425   C175.603,133.81,174.567,130.709,174.64,128.312z"/>
                            <path d="M255.317,93.123c-4.208,0-7.618-3.41-7.618-7.618c0-13.923-11.326-25.249-25.249-25.249   c-9.082,0-17.508,4.923-21.99,12.848c-1.524,2.694-4.53,4.199-7.6,3.806c-1.152-0.148-2.223-0.22-3.277-0.22   c-6.469,0-12.371,2.453-16.842,6.469c9.128,10.056,15.215,22.921,16.765,37.134c2.445-0.272,4.909-0.409,7.38-0.409   c33.014,0,60.448,24.347,65.289,56.029C281.907,172.632,297,155.452,297,134.806C297,111.822,278.301,93.123,255.317,93.123z"/></g>
                        </svg>
                        <span>24°C</span>
                    </div>
                    <span className="weather-inf">Clear Sky</span>
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
                        <div className="main-inf">20°</div>
                        <div className="more-inf">
                            Humidity is making it feels warmer
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                            <path d="M9.40192 13.5C9.66523 13.9561 10.0439 14.3348 10.5 14.5981C10.9561 14.8614 11.4734 15 12 15C12.5266 15 13.0439 14.8614 13.5 14.5981C13.9561 14.3348 14.3348 13.9561 14.5981 13.5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                            <rect x="6.875" y="7.875" width="3.25" height="2.25" rx="1.125" fill="#33363F" stroke="#33363F" stroke-width="0.25" stroke-linecap="round"/>
                            <rect x="13.875" y="7.875" width="3.25" height="2.25" rx="1.125" fill="#33363F" stroke="#33363F" stroke-width="0.25" stroke-linecap="round"/>
                            </svg>
                            <span>Dew point</span>
                        </div>
                        <div className="main-inf">25°</div>
                        <div className="more-inf">
                            Comfortable Air
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                                <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"/>
                            </svg>
                            <span>Visibility</span>
                        </div>
                        <div className="main-inf">10 Km+</div>
                        <div className="more-inf">
                            Very good vision
                        </div>
                    </div>

                    <div className="card">
                        <div className="title">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                                <g id="Environment / Water_Drop">
                                <path id="Vector" d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
                            </svg>
                            <span>Humidity</span>
                        </div>
                        <div className="main-inf">43%</div>
                        <div className="more-inf">
                            Humidity makes the temp warmer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 