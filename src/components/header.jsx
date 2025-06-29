import {NavBar} from './nav-bar';
import {SigninButton} from './buttons';
import '../styles/header.css'

export function Header() {
    return (
        <div className="header">
            <h1>travel.</h1>
            <NavBar/>
            <SigninButton/>
        </div>
    );
}