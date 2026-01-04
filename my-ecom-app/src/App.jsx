import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import Cart from './components/Cart'

export default function App() {
  const { isCartOpen, closeCart } = useContext(CartContext)

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

      <Cart show={isCartOpen} onClose={closeCart} />
    </>
  )
}
