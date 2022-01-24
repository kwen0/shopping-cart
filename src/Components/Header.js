import './style.css';
import "@fontsource/quicksand";
import logo from './images/logo.png'
import { BsBag } from 'react-icons/bs';

function Header() {
    return (
        <div className="header">
            <div>SHOP</div>
            <img src={logo} className="logo" alt="logo" />
            <div><BsBag /></div>
        </div>
    );
}

export default Header;
