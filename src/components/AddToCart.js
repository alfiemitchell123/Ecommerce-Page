import React, { useState } from 'react';
import { useCart } from './CartContext';

const AddToCart = () => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(quantity);
        setQuantity(1);
    }

    return (
        <div className="addToCartContainer">
            <div className="productQtyContainer">
                <button onClick={handleDecrement} className="productQtyBtn"><img src="../images/icon-minus.svg" alt="-" /></button>
                <span id="productQtyNum">{quantity}</span>
                <button onClick={handleIncrement} className="productQtyBtn"><img src="../images/icon-plus.svg" alt="+" /></button>
            </div>
            <div className="addToCartBtnContainer">
                <button onClick={handleAddToCart} className="addToCartBtn"><img id="addToCartIcon" src="../images/icon-cart.svg" alt="Cart" />Add to cart</button>
            </div>
        </div>
    )
}

export default AddToCart;