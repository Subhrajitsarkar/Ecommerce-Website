import React, { useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import Products from './pages/Products'
import Cart from './components/Cart'

export default function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      {/* HEADER */}
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>The Generics</Navbar.Brand>

          <Nav className="mx-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Store</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>

          <Button
            variant="outline-info"
            onClick={() => setShowCart(true)}
          >
            Cart 0
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

      {/* SEE CART BUTTON */}
      <div className="text-center my-5">
        <Button variant="secondary" size="lg" onClick={() => setShowCart(true)}>
          See the cart
        </Button>
      </div>

      {/* CART MODAL */}
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
