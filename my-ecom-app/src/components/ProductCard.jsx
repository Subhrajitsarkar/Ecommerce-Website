import React from 'react'
import { Card, Button } from 'react-bootstrap'


export default function ProductCard({ product }) {
    return (
        <Card className="product-card w-100 shadow-sm border-0">
            <div className="image-wrap">
                <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
            </div>


            <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="price">${product.price.toFixed(2)}</Card.Text>
                {/* No cart logic — plain button */}
                <Button variant="info" className="btn-add">
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    )
}