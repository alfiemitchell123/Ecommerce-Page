import CartIcon from './CartIcon';
import ProfilePhoto from '../images/image-avatar.png';

function Navbar() {
    return (
        <nav className="nav">
            <ul className="menuList">
                <li className="menuItem d-inline">Collections</li>
                <li className="menuItem d-inline">Men</li>
                <li className="menuItem d-inline">Women</li>
                <li className="menuItem d-inline">About</li>
                <li className="menuItem d-inline">Contact</li>
            </ul>

            <CartIcon />
            <img src={ProfilePhoto} alt="You" width="50px" height="50px" />
        </nav>
    );
}

export default Navbar;