import React from 'react';
import iconCart from '../images/icon-cart.svg';
import { useCart } from './CartContext';
import Cart from './Cart';
import products from './ProductsData';

const CartIcon = () => {
    const { cartItems, cartOpen, toggleCart } = useCart();
    const totalQty = cartItems.reduce((total, item) => total + item.quantity, 0);
    const product = products[0];

    return (
        <div className="cartIconContainer" onClick={toggleCart}>
            <img
                src={iconCart}
                alt="Cart"
                width="20px"
                height="20px"
                draggable="false"
            />
            <div className="cartTotalContainer">
                <span id="cartTotal">{totalQty}</span>
            </div>
            {cartOpen && <Cart product={product} />}
        </div>
    );
}

export default CartIcon;