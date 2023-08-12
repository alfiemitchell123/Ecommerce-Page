import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId, quantity) => {
        const existingItemIndex = cartItems.findIndex((item) => item.productId === productId);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { productId, quantity }]);
        }
    };

    const removeAllItemsFromCart = () => {
        setCartItems([]);
    }

    return <CartContext.Provider value={{ cartItems, addToCart, cartOpen, toggleCart, removeAllItemsFromCart }}>{children}</CartContext.Provider>
}