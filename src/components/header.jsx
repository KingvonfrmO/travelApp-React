import {SigninButton} from './buttons';
import '../styles/header.css';
import {Link} from "react-router-dom";
export function Header() {
    return (
        <div className="header">
            <h1>travel.</h1>
            <div className="navigation">
                <ul className="navBar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href={"#destinations"}>Destinations</a>
                    </li>
                    <li>
                        <a href={"#Newsletter"}>NewsLetter</a>
                    </li>
                    <li>
                        <a href={"#footer"}>SiteMap</a>
                    </li>
                </ul>
            </div>
            <SigninButton/>
        </div>
    );
}