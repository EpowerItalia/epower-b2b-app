import React from 'react';
import ProductCard from '../components/ProductCard';
import mockFlashOffers from '../data/mockFlashOffers.json';
import './FlashOffersPage.css';

function FlashOffersPage() {
  return (
    <div className="flash-offers-page">
      <h1 className="flash-offers-page-title">Offerte Flash Esclusive</h1>
      {mockFlashOffers && mockFlashOffers.length > 0 ? (
        <div className="flash-offers-grid">
          {mockFlashOffers.map((offer) => (
            <ProductCard
              key={offer.id}
              productId={offer.productId || offer.id} // Use productId from offer, fallback to offer.id
              productType={offer.productType || 'offer'} // Use productType, fallback to generic 'offer'
              name={offer.name}
              description={offer.description}
              price={offer.offerPrice} // This is the 'current-price'
              originalPrice={offer.originalPrice}
              offerEndDate={offer.offerEndDate}
              imageUrl={offer.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p className="flash-offers-no-offers">
          Al momento non ci sono offerte flash disponibili. Torna a trovarci presto!
        </p>
      )}
    </div>
  );
}

export default FlashOffersPage;
