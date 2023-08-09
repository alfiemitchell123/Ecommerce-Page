import React from 'react';
import iconCart from '../images/icon-cart.svg';
import { useCart } from './CartContext';

const CartIcon = () => {
    const { cartItems, handleMouseEnter, handleMouseLeave } = useCart();
    const totalQty = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cartIconContainer">
            <img
                src={iconCart}
                alt="Cart"
                width="20px"
                height="20px"
                draggable="false"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="cartTotalContainer">
                <span id="cartTotal">{totalQty}</span>
            </div>
        </div>
    );
}

export default CartIcon;