import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import Products from './pages/Products'


export default function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">The Generics</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Button variant="outline-info" className="cart-btn">
            Cart <span className="cart-count">0</span>
          </Button>
        </Container>
      </Navbar>


      <header className="hero text-center">
        <Container>
          <h1 className="display-2">The Generics</h1>
          <p className="lead">A simple static store built with React + React‑Bootstrap</p>
        </Container>
      </header>


      <main>
        <Products />


        <div className="text-center my-5">
          <Button variant="secondary" size="lg">
            See the cart
          </Button>
        </div>
      </main>


      <footer className="site-footer text-center">
        <Container>
          <h2>The Generics</h2>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-spotify"></i>
          </div>
          <p className="mb-0">© {new Date().getFullYear()} The Generics — All rights reserved.</p>
        </Container>
      </footer>
    </div>
  )
}