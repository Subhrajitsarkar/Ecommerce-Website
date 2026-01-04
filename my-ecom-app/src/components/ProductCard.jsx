import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

export default function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext)

    return (
        <Card className="product-card">
            <div className="img-wrapper">
                <Card.Img src={product.imageUrl} />
            </div>

            <Card.Body className="text-center">
                <Card.Title className="product-title">
                    {product.title}
                </Card.Title>

                <div className="product-footer">
                    <span className="price">${product.price}</span>
                    <Button
                        variant="info"
                        size="sm"
                        onClick={() => addToCart(product)}
                    >
                        ADD TO CART
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
