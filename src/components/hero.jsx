import heroImage from '../assets/images/Image.png'
import {FindOutButton, PlayButton} from "./buttons";
import '../styles/hero.css';
export function Hero(){
    return (
        <div className="hero">
            <div className="hero-content">
                <span className="section-label">
                    BEST DESTINATIONS AROUND THE WORLD
                </span>
                <h1>
                    Travel, enjoy<br/>and live a new<br/>and full life
                </h1>
                <p>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                    listening. Park gate sell they west hard for the.
                </p>
                <div className="hero-actions">
                    <FindOutButton />
                    <PlayButton/>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Traveler"/>
            </div>
        </div>
    );
}