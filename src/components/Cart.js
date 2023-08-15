import React from 'react';
import { useCart } from './CartContext';
import deleteIcon from '../images/icon-delete.svg';
import productImage from '../images/image-product-1-thumbnail.jpg';
import products from './ProductsData';

const Cart = ({ product }) => {
    const { cartItems, removeAllItemsFromCart } = useCart();

    const handleCartClick = (event) => {
        event.stopPropagation();
    }

    return (
        <div className="cart" onClick={handleCartClick}>
            <h4 id="cartTitle">Cart</h4>
            <hr />
            {cartItems.length === 0 ? (
                <div className="cartEmptyContainer">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <ul id="cartItemList">
                    {cartItems.map(cartItem => {
                        const product = products.find(product => product.id === cartItem.productId);
                        if (product) {
                            return (
                                <div>
                                    <li class="cartItem" key={product.id}>
                                        <img id="cartProductImg" src={productImage} alt="Img" />
                                        <div id="cartItemInfo">
                                            <p id="cartProductTitle">{product.name}</p>
                                            <p id="cartProductPrice">${(product.price).toFixed(2)} x {cartItem.quantity} <b>${(product.price * cartItem.quantity).toFixed(2)}</b></p>
                                        </div>
                                        <img id="deleteBtn" onClick={removeAllItemsFromCart} src={deleteIcon} alt="Delete" />
                                    </li>
                                    <div className="checkoutBtnContainer">
                                        <button id="checkoutBtn" className="addToCartBtn">Checkout</button>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </ul>
            )}
        </div>
    );
};

export default Cart;