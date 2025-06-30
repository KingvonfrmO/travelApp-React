import '../styles/sign-in.css';
export default function Signin(){
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

                    <form className="signup-form">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
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