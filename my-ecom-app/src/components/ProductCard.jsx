import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ProductCard({ product }) {
    return (
        <Card className="text-center h-100">
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>

                {/* NO LOGIC */}
                <Button variant="info">ADD TO CART</Button>
            </Card.Body>
        </Card>
    )
}
