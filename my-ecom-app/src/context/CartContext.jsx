import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CRUDCRUD_API_KEY = "YOUR_CRUDCRUD_API_KEY"; // Replace with your key

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [token, setToken] = useState(null);
    const [userEmail, setUserEmail] = useState('');

    const sanitizeEmail = (email) => email.replace(/[@.]/g, '');

    const setAuthToken = (newToken, email) => {
        setToken(newToken);
        localStorage.setItem('authToken', newToken);
        if (email) {
            const sanitized = sanitizeEmail(email);
            setUserEmail(sanitized);
            localStorage.setItem('userEmail', sanitized);
        }
    };

    const logout = () => {
        setToken(null);
        setUserEmail('');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userEmail');
        setCartItems([]);
    };

    const crudcrudApi = userEmail ? `https://crudcrud.com/api/${CRUDCRUD_API_KEY}/cart${userEmail}` : null;

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedEmail = localStorage.getItem('userEmail');
        if (storedToken) {
            setToken(storedToken);
        }
        if (storedEmail) {
            setUserEmail(storedEmail);
        }
    }, []);

    useEffect(() => {
        const fetchCartItems = async () => {
            if (crudcrudApi) {
                try {
                    const response = await fetch(crudcrudApi);
                    if (response.ok) {
                        const data = await response.json();
                        setCartItems(data);
                    }
                } catch (error) {
                    console.error("Failed to fetch cart items:", error);
                }
            }
        };
        if (token && userEmail) {
            fetchCartItems();
        }
    }, [token, userEmail, crudcrudApi]);


    const addToCart = async (product) => {
        if (!crudcrudApi) return;

        const existingItemIndex = cartItems.findIndex(item => item.title === product.title);

        if (existingItemIndex > -1) {
            // Update quantity for existing item
            const itemToUpdate = cartItems[existingItemIndex];
            const updatedItem = { ...itemToUpdate, quantity: (itemToUpdate.quantity || 1) + 1 };
            
            try {
                const response = await fetch(`${crudcrudApi}/${itemToUpdate._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: updatedItem.title, price: updatedItem.price, imageUrl: updatedItem.imageUrl, quantity: updatedItem.quantity })
                });
                if (response.ok) {
                    const newCartItems = [...cartItems];
                    newCartItems[existingItemIndex] = { ...newCartItems[existingItemIndex], quantity: updatedItem.quantity };
                    setCartItems(newCartItems);
                }
            } catch (error) {
                console.error("Failed to update cart item:", error);
            }

        } else {
            // Add new item
            try {
                const response = await fetch(crudcrudApi, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...product, quantity: 1 }),
                });
                if (response.ok) {
                    const newItem = await response.json();
                    setCartItems(prevItems => [...prevItems, newItem]);
                }
            } catch (error) {
                console.error("Failed to add to cart:", error);
            }
        }
    };

    const removeFromCart = (title) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.title !== title)
        );
    };

    const openCart = async () => {
        if (crudcrudApi) {
            try {
                const response = await fetch(crudcrudApi);
                if (response.ok) {
                    const data = await response.json();
                    setCartItems(data);
                }
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        }
        setIsCartOpen(true);
    }
    const closeCart = () => setIsCartOpen(false);

    const totalItems = cartItems.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                totalItems,
                isCartOpen,
                openCart,
                closeCart,
                token,
                setAuthToken,
                logout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
