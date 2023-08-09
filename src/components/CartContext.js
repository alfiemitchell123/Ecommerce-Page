import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);

    const handleMouseEnter = () => {
        setCartOpen(true);
    }

    const handleMouseLeave = () => {
        setCartOpen(false);
    }

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (quantity) => {
        setCartItems([...cartItems, { quantity }]);
    };

    return <CartContext.Provider value={{ cartItems, addToCart, cartOpen, handleMouseEnter, handleMouseLeave }}>{children}</CartContext.Provider>
}