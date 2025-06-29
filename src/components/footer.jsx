import '../styles/footer.css';
import '../pages/contact'
import {Link} from "react-router-dom";

export function Footer(){
    return (
        <footer className="footer" id="footer">
            <div className="footer-brand">
                <div className="logo">travel.</div>
                <p>Book your trip in minute, get full<br/>Control for much longer.</p>
            </div>
            <div className="footer-links">
                <div>
                    <h4>Company</h4>
                    <Link to="/contact">Contact</Link>
                    <a href="#">Mobile</a>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="#">Help/FAQ</a>
                    <a href="#">Press</a>
                    <a href="#">Affiliates</a>
                </div>
                <div>
                    <h4>More</h4>
                    <a href="#">Airlinefees</a>
                    <a href="#">Airline</a>
                    <a href="#">Low fare tips</a>
                </div>
            </div>
        </footer>
    );
}