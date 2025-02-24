"use client"
import { useState } from 'react'

import handleSubmit from "@/functions/handleSubmit";
import "@/style/header/search/search.css";

export default function Search({ passCoordinates, APIKey }) {
    const [cityName, setCityName] = useState("");
    const input = document.querySelector("input")

    return (
        <form id="main-form" onSubmit={async (event) => await handleSubmit(event, input, cityName, passCoordinates, APIKey)}>
            <svg className="location-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" href="http://www.w3.org/2000/svg">
                <path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#292D32"/>
            </svg>
            <input
            id="search-input"
            type="text"
            placeholder="Type your city here..."
            value={cityName}
            onChange={event => setCityName(event.target.value)}
            />
            <button type="submit">
                <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon" version="1.1" href="http://www.w3.org/2000/svg"><path d="M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z" fill="#000000"/></svg>
            </button>
        </form>
    );
}