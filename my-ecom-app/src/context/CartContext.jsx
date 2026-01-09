import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken')
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    const setAuthToken = (newToken) => {
        setToken(newToken)
        localStorage.setItem('authToken', newToken)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('authToken')
    }


    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.title === product.title
            )

            if (existingItem) {
                return prevItems.map((item) =>
                    item.title === product.title
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            }

            return [...prevItems, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (title) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.title !== title)
        )
    }

    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)

    const totalItems = cartItems.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
    )

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
    )
}
