import sateLite from '../assets/images/satellite-dish.png';
import plane from '../assets/images/plane.png';
import cog from '../assets/images/cog.png';
import microphone from '../assets/images/microphone.png';
import '../styles/services.css'

export function ServiceCards() {
    const cards = [
        {
            image: sateLite,
            alt: "satellite",
            name: 'Calculated Weather',
            description: 'Built Wicket longer admire do barton vanity itself do in it.'
        },
        {
            image: plane,
            alt: "plane",
            name: 'Best Flights',
            description: 'Engrossed listening. Park gate sell they west hard for the.'
        },
        {
            image: cog,
            alt: "cog",
            name: 'Customization',
            description: 'We deliver outsourced aviation services for military customers'
        },
        {
            image: microphone,
            alt: "microphone",
            name: 'Local events',
            description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.'
        }
    ];

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