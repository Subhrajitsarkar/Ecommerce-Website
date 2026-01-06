import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <Card className="product-card">
        <div className="img-wrapper">
          <Card.Img src={product.imageUrl} />
        </div>

        <Card.Body className="text-center">
          <Card.Title className="product-title">{product.title}</Card.Title>

          <div className="product-footer d-flex align-items-center justify-content-between mt-3">
            <span className="price">${product.price}</span>
            <Button
              variant="info"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
              className="btn-add"
            >
              Add
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
