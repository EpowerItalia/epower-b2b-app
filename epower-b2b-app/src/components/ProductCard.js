import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ imageUrl, name, description, price, originalPrice, offerEndDate, productId, productType }) {
  const linkTo = `/product/${productType}/${productId}`;

  // Basic placeholder if imageUrl is not provided
  const ImageComponent = imageUrl ? (
    <img src={imageUrl} alt={name} className="product-card-image" />
  ) : (
    <div className="product-card-placeholder-image">
      <span>No Image Available</span>
    </div>
  );

  return (
    <Link to={linkTo} className="product-card">
      <div className="product-card-image-container">
        {ImageComponent}
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-description">{description}</p>
        <div className="product-card-price-wrapper">
          {originalPrice && (
            <span className="original-price">
              {typeof originalPrice === 'number' ? `€${originalPrice.toFixed(2)}` : originalPrice}
            </span>
          )}
          <span className="current-price">
            {typeof price === 'number' ? `€${price.toFixed(2)}` : price}
          </span>
        </div>
        {offerEndDate && <p className="offer-end-date">{offerEndDate}</p>}
      </div>
    </Link>
  );
}

// Default props for development and testing
ProductCard.defaultProps = {
  imageUrl: '', // Set to empty string to trigger placeholder
  name: 'Nome Prodotto Esempio',
  description: 'Questa è una breve descrizione del prodotto. Mostra le caratteristiche principali e i benefici.',
  price: '€0.00',
  originalPrice: null,
  offerEndDate: null,
  productId: 'default',
  productType: 'product' // Generic type, should be 'ebike' or 'ricambio' in practice
};

export default ProductCard;
