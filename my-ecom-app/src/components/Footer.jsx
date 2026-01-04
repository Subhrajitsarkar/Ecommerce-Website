import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className="site-footer bg-dark text-white text-center py-5">
            <Container>
                <h2>The Generics</h2>
                <div className="social-icons my-3">
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                    <i className="bi bi-spotify"></i>
                </div>
                <p className="mb-0">© {new Date().getFullYear()} The Generics — All rights reserved.</p>
            </Container>
        </footer>
    )
}
