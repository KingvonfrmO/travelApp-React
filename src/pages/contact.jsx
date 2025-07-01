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
                            <input
                                name="firstname"
                                type="text"
                                id="first-name"
                                value={state.firstname}
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_INPUT',
                                    field: e.target.name,
                                    value: e.target.value
                                })}
                            />
                            {state.errors.firstname && <span className="error">{state.errors.firstname}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input
                                name = "lastname"
                                type="text"
                                id="last-name"
                                value={state.lastname}
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_INPUT',
                                    field: e.target.name,
                                    value: e.target.value
                                })}
                            />
                            {state.errors.lastname && <span className="error">{state.errors.lastname}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                name="email"
                                type="text"
                                id="email"
                                value={state.email}
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_INPUT',
                                    field: e.target.name,
                                    value: e.target.value
                                })}
                            />
                            {state.errors.email && <span className="error">{state.errors.email}</span>}
                        </div>



                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                name="phone"
                                type="text"
                                id="phone"
                                value={state.phone}
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_INPUT',
                                    field: e.target.name,
                                    value: e.target.value
                                })}
                            />
                            {state.errors.phone && <span className="error">{state.errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name='message'
                                value={state.message}
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_INPUT',
                                    field: e.target.name,
                                    value: e.target.value
                                })}
                            >
                            </textarea>
                            {state.errors.message && <span className="error">{state.errors.message}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                name='checkbox'
                                type="checkbox"
                                id="consent"
                                onChange={(e) => dispatch({
                                    type: 'UPDATE_INPUT',
                                    field: e.target.name,
                                    value: e.target.value
                                })}
                            />
                            <label htmlFor="consent">Do you consent to the above?</label>
                            {state.errors.message && <span className="error">{state.errors.message}</span>}
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