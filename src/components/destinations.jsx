import '../styles/destinations.css'
import {destinations} from './destinationList';

export function Destinations() {
    return (
        <div className="destinations" id="destinations">
            <span className="top-selling-label">Top Selling</span>
            <h2>Top Destinations</h2>
            <div className="destinations-list">
                {
                    destinations.map((destination, index) => (
                        <div className='destination' key={index}>
                            <img src={destination.image} alt={destination.name}/>
                            <div className="destination-info">
                                <div>
                                    <span>{destination.name}</span>
                                    <span>{destination.price_label}</span>
                                </div>
                                <div className="trip-info">
                                    <span>&#9992;</span>
                                    <span>{destination.duration_label}</span>
                                </div>
                                <div className="weather" id={`weather-${index}`}>
                                    Loading Weather...
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
