import logo from './images/logo.png'
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div>SHOP</div>
            <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
            <div><BsBag /></div>
        </div>
    );
}

export default Header;
