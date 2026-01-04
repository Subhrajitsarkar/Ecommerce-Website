import React, { useContext, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Products from './pages/Products'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'

export default function App() {
  const [showCart, setShowCart] = useState(false)
  const { totalQuantity } = useContext(CartContext)

  return (
    <>
      {/* HEADER */}
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>The Generics</Navbar.Brand>

          <Nav className="mx-auto">
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>STORE</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>

          <Button variant="outline-info" onClick={() => setShowCart(true)}>
            Cart {totalQuantity}
          </Button>
        </Container>
      </Navbar>

      {/* HERO */}
      <header className="hero text-center">
        <Container>
          <h1 className="display-2">The Generics</h1>
        </Container>
      </header>

      {/* PRODUCTS */}
      <Products />

      <div className="text-center my-5">
        <Button variant="secondary" onClick={() => setShowCart(true)}>
          See the cart
        </Button>
      </div>

      <Cart show={showCart} onClose={() => setShowCart(false)} />

      {/* FOOTER */}
      <footer className="site-footer text-center">
        <Container>
          <h2>The Generics</h2>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-spotify"></i>
          </div>
        </Container>
      </footer>
    </>
  )
}
