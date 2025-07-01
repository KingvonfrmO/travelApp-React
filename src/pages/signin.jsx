import '../styles/sign-in.css';
import {useReducer} from "react";
import {initialState, reducer, validateForm} from "../utils";

export default function Signin(){
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleSubmit(e){
        e.preventDefault();
        const errors = validateForm(state);
        if (Object.keys(errors).length > 0 ){
            dispatch({type: 'ERROR', errors});
            //console.log(Object.keys(errors));
        } else{
            alert("Success");
            dispatch({type: 'RESET'});
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signup-left">
                    <h1 className="logo-text">travel.</h1>
                    <p className="description">
                        Book your trip in minute, get full<br />
                        Control for much longer.
                    </p>
                </div>
                <div className="signup-right">
                    <h2>Create Account</h2>

                    <div className="social-buttons">
                        <button className="google-btn">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                            Sign up with Google
                        </button>
                        <button className="facebook-btn">
                            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className="divider">— OR —</div>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input
                            name="firstname"
                            type="text"
                            value={state.firstname}
                            placeholder="First Name"
                            onChange={(e) => dispatch({
                                type: 'UPDATE_INPUT',
                                field: e.target.name,
                                value: e.target.value
                            })}
                        />
                        {state.errors.firstname && <p className="error">{state.errors.firstname}</p>}

                        <input
                            name="lastname"
                            type="text"
                            placeholder="Second Name"
                            value={state.lastname}
                            onChange={(e) => dispatch({
                                type: 'UPDATE_INPUT',
                                field: e.target.name,
                                value: e.target.value
                            })}
                        />
                        {state.errors.lastname && <p className="error">{state.errors.lastname}</p>}

                        <input
                            name='email'
                            type="email"
                            placeholder="Email Address"
                            value={state.email}
                            onChange={(e) => dispatch({
                                type: 'UPDATE_INPUT',
                                field: e.target.name,
                                value: e.target.value
                            })}
                        />
                        {state.errors.email && <p className="error">{state.errors.email}</p>}

                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={(e) => dispatch({
                                type: 'UPDATE_INPUT',
                                field: e.target.name,
                                value: e.target.value
                            })}
                        />
                        {state.errors.password && <p className="error">{state.errors.password}</p>}

                        <button type="submit" className="create-account-btn">Create Account</button>
                    </form>

                    <p className="login-link">
                        Already have an account? <a href="#">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}