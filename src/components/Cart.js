import React from 'react';
import { useCart } from './CartContext';
import deleteIcon from '../images/icon-delete.svg';

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <div className="cart">
            <h4 id="cartTitle">Cart</h4>
            <hr />
            <ul id="cartItemList">
                {cartItems.map(item => (
                    <li class="cartItem" key={item.id}>
                        {item.name} - Quantity: {item.quantity} <img src={deleteIcon} alt="Delete" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;