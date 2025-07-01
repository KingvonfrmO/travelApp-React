import "../styles/contact.css";
import {Footer} from "../components/footer";
import {Header} from "../components/header";
import {useReducer} from "react";
import {initialcontactState, validateForm, reducer} from "../utils";

export default function Contact() {
    const [state, dispatch] = useReducer(reducer, initialcontactState);
    function handleSubmit(e){
        e.preventDefault();
        const errors = validateForm(state);
        if (Object.keys(errors).length > 0){
            dispatch({type: 'ERROR', errors});
        } else {
            dispatch({type: 'RESET'});
        }
    }
    return (
        <>
            <Header/>
            <div className="container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name:</label>
                            <input type="text" id="first-name"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input type="text" id="last-name"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" id="phone"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>

                        <div className="form-group">
                            <input type="checkbox" id="consent"/>
                            <label htmlFor="consent">Do you consent to the above?</label>
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div
                id="toast"
                role="status"
                aria-live="polite"
                style={{display: "none"}}
                className="toast"
            ></div>
            <Footer/>
        </>
    );
}