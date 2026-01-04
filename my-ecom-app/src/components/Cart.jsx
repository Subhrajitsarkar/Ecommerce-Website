import React, { useState } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    },
]

export default function Cart({ show, onClose }) {
    const [items, setItems] = useState(cartElements)

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index))
    }

    return (
        <Modal show={show} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>CART</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {items.length === 0 && <p>Your cart is empty</p>}

                {items.map((item, index) => (
                    <div key={index} className="cart-row">
                        <Image src={item.imageUrl} />
                        <span>{item.title}</span>
                        <span>${item.price}</span>
                        <span>Qty: {item.quantity}</span>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => removeItem(index)}
                        >
                            REMOVE
                        </Button>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    )
}
