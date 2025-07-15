import {Link} from "react-router-dom";

export function NavBar(){
    return (
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
    );
}