import github from './images/github.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div>
                        <h2>SUPPORT</h2>
                        <Link to='/comingsoon'><li>FAQ</li></Link>
                        <Link to='/comingsoon'><li>Shipping</li></Link>
                        <Link to='/comingsoon'><li>Returns + Exchanges</li></Link>
                        <Link to='/comingsoon'><li>Contact Us</li></Link>
                    </div>
                    <div>
                        <h2>ABOUT US</h2>
                        <Link to='/comingsoon'><li>Our Mission</li></Link>
                        <Link to='/comingsoon'><li>Sustainability</li></Link>
                        <Link to='/comingsoon'><li>Store Locations</li></Link>
                        <Link to='/comingsoon'><li>Careers</li></Link>
                    </div>
                </div>
                <div className="footer-top-right">
                    <h2>JOIN OUR MAILING LIST</h2>
                    Get early access to new releases and more.
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        alert('You\'re in!')
                    }}><input type="email" className="email" placeholder="Your email"></input></form>
                </div>
            </div>
            <div className="github">
                &copy; 2022 kwen0
                <a href="https://github.com/kwen0/shopping-cart">
                    <img src={github} alt="github logo" class="ghlogo" />
                </a>
            </div>
        </div >
    );
}

export default Footer;
