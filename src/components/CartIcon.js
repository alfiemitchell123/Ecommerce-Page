import iconCart from '../images/icon-cart.svg';
import { useCart } from './CartContext';

const CartIcon = () => {
    const { cartItems } = useCart();
    const totalQty = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cartContainer">
            <img src={iconCart} alt="Cart" width="20px" height="20px" />
            <span id="cartTotal">{totalQty}</span>
        </div>
    );
}

export default CartIcon;