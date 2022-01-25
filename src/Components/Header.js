import logo from './images/logo.png'
import { BsBag, BsSuitHeart, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Link to='/shopall'><div>SHOP</div></Link>
            </div>
            <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
            <div className="header-right">
                <Link to='/login'><div><BsPerson /></div></Link>
                <Link to='/wishlist'><div><BsSuitHeart /></div></Link>
                <Link to='/cart'><div><BsBag /></div></Link>
            </div>
        </div>
    );
}

export default Header;
