import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import Cart from './components/Cart'

export default function App() {
  const { isCartOpen, closeCart } = useContext(CartContext)

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>

      <Footer />

      <Cart show={isCartOpen} onClose={closeCart} />
    </>
  )
}
