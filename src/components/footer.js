import '../styles/footer.css';

export function Footer(){
    return (
        <footer className="footer">
            <div className="footer-brand">
                <div className="logo">travel.</div>
                <p>Book your trip in minute, get full<br/>Control for much longer.</p>
            </div>
            <div className="footer-links">
                <div>
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
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