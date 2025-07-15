import '../styles/services.css'
import {cards} from "./serviceCardsList";

export function ServiceCards() {
    return (
        <div id="services" className="services">
            <p className='category-label'>category</p>
            <h2>We Offer Best Services</h2>
            <div className='serviceCards'>
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt={card.alt}/>
                        <h3>{card.name}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}