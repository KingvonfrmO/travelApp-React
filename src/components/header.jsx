import {Buttons} from './buttons';
import {NavBar} from "./navBar";
import {useNavigate} from "react-router-dom";
import '../styles/header.css';

export function Header() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signin');
    }
    return (
        <div className="header">
            <h1>travel.</h1>
            <NavBar/>
            <Buttons label='sign in' onClick = {handleClick} class_name={'signInButton'}  />
        </div>
    );
}