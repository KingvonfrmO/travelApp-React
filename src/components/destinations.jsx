import '../styles/destinations.css';
import { destinations } from './destinationList';
import { useEffect, useState } from 'react';

export function Destinations() {
    const [weather, setWeather] = useState({});
    const apiKey = 'fc8afb1bf3aa292b307c6bd0e252b983';

    useEffect(() => {
        const fetchWeather = async (cityName) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (response.ok) {
                    setWeather(prev => ({
                        ...prev,
                        [cityName]: data
                    }));
                } else {
                    console.error(`Failed to fetch weather for ${cityName}: ${data.message}`);
                }
            } catch (error) {
                console.error(`Error fetching weather for ${cityName}:`, error);
            }
        };
        destinations.forEach(destination => {
            fetchWeather(destination.name);
        });
    }, []);

    return (
        <div className="destinations" id="destinations">
            <span className="top-selling-label">Top Selling</span>
            <h2>Top Destinations</h2>
            <div className="destinations-list">
                {destinations.map((destination, index) => {
                    const weatherData = weather[destination.name];
                    const weatherInfo = weatherData ? `${weatherData.main.temp}°C, ${weatherData.weather[0].main}` : 'Loading weather...';
                    return (
                        <div className="destination" key={index}>
                            <img src={destination.image} alt={destination.name} />
                            <div className="destination-info">
                                <div>
                                    <span>{destination.name}</span>
                                    <span>{destination.price_label}</span>
                                </div>
                                <div className="trip-info">
                                    <span>&#9992;</span>
                                    <span>{destination.duration_label}</span>
                                </div>
                                <div className="weather" id={`weather-${destination.name}`}>
                                    {weatherInfo}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
