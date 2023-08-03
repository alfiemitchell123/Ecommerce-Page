import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (quantity) => {
        setCartItems([...cartItems, { quantity }]);
    };

    return <CartContext.Provider value={{ cartItems, addToCart }}>{children}</CartContext.Provider>
}