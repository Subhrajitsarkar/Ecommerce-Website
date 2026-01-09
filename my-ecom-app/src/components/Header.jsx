import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './Header.css'

export default function Header() {
    const { totalItems, openCart } = useContext(CartContext)

    return (
        <header className="main-header">
            <h2 className="logo">The Generics</h2>

            <nav>
                <NavLink to="/" className="nav-link">
                    HOME
                </NavLink>
                <NavLink to="/store" className="nav-link">
                    STORE
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    ABOUT
                </NavLink>
                <NavLink to="/login" className="nav-link">
                    LOGIN
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    CONTACT US
                </NavLink>
            </nav>

            <button className="cart-btn" onClick={openCart}>
                Cart {totalItems}
            </button>
        </header>
    )
}
