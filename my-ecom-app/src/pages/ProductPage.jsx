import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsArr } from '../components/Products';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const product = productsArr.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product ? product.imageUrl : '');

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    e.target.style.backgroundPosition = `${x}% ${y}%`;
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page-container">
      <div className="product-images">
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} ${index + 1}`}
              className="thumbnail"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div
          className="main-image-container"
          onMouseMove={handleMouseMove}
          style={{ backgroundImage: `url(${mainImage})` }}
        >
          <img src={mainImage} alt={product.title} className="main-image" />
        </div>
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <div className="reviews">
          <h3>Reviews</h3>
          {product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong>{review.author}</strong>
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
