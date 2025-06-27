import playbutton from '../assets/images/play-button.png';
import '../styles/buttons.css'

export function SigninButton() {
    return (
        <div className="signInButton">
            <button>Sign In</button>
        </div>
    );
}

export function FindOutButton() {
    return (
        <button className="findOutButton">
            Find out more
        </button>
    );
}

export function PlayButton() {
    return (
        <button className="playDemoButton">
            <span className="play-icon">&#9654;</span>
            Play Demo
        </button>
    );
}

export function SubscribeButton() {
    return (
        <div className="subscribeButton">
            <button>
                Subscribe
            </button>
        </div>
    );
}