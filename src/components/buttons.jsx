import '../styles/buttons.css'
import {useNavigate} from "react-router-dom";

export function SigninButton() {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/signin');
    };

    return (
        <div className="signInButton">
            <button onClick={handleSignIn}>
                Sign in
            </button>
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