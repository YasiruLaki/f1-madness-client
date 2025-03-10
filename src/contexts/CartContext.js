import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to update local storage
    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Function to add a product to the cart
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(
            item => item.productid === product.productid && item.size?.size === product.size?.size
        );

        if (existingProductIndex !== -1) {
            // If product exists, update quantity
            const updatedCart = cart.map((item, index) => {
                if (index === existingProductIndex) {
                    return { ...item, quantity: item.quantity + product.quantity };
                }
                return item;
            });
            setCart(updatedCart);
            updateLocalStorage(updatedCart);
        } else {
            // Otherwise, add new product
            const updatedCart = [...cart, product];
            setCart(updatedCart);
            updateLocalStorage(updatedCart);
        }
    };

    // Function to remove a product from the cart
    const removeFromCart = (productid, size) => {
        const updatedCart = cart.filter(
            item => !(item.productid === productid && item.size?.size === size)
        );
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };

    // Function to increment product quantity
    const incrementQuantity = (productid, size) => {
        const updatedCart = cart.map(item => {
            if (item.productid === productid && item.size?.size === size) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };

    // Function to decrement product quantity
    const decrementQuantity = (productid, size) => {
        const updatedCart = cart.map(item => {
            if (item.productid === productid && item.size?.size === size) {
                // Ensure quantity does not go below 1
                return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item;
            }
            return item;
        });
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };

    // Initialize cart from local storage when the component mounts
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);