import React, { useContext } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

export default function Cart({ show, onClose }) {
    const { cartItems, removeFromCart } = useContext(CartContext)

    return (
        <Modal show={show} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {cartItems.length === 0 && <p>Your cart is empty</p>}

                {cartItems.map((item, index) => (
                    <div className="cart-row" key={index}>
                        <Image src={item.imageUrl} />
                        <span>{item.title}</span>
                        <span>${item.price}</span>
                        <span>Qty: {item.quantity}</span>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => removeFromCart(item.title)}
                        >
                            REMOVE
                        </Button>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    )
}
