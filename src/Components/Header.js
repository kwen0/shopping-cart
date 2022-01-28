import logo from './images/logo.png'
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function Header(props) {
    const { bag } = props;
    return (
        <div className="header">
            <div className="header-left">
                <Link to='/all'><div>SHOP</div></Link>
            </div>
            <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
            <div className="header-right">
                <Link to='/bag'><div><BsBag /></div></Link>
                <div>{bag ? `(${bag.length})` : null}</div>
            </div>
        </div>
    );
}

export default Header;
