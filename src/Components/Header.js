import './style.css';
import "@fontsource/quicksand";
import logo from './logo.png'

function Header() {
    return (
        <div className="header">
            <div>SHOP</div>
            <img src={logo} className="logo" alt="logo" />
            <div>CART</div>
        </div>
    );
}

export default Header;
