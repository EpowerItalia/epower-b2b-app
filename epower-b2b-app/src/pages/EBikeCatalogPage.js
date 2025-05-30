import React from 'react';
import ProductCard from '../components/ProductCard';
import mockEBikes from '../data/mockEBikes.json';
import './EBikeCatalogPage.css';

function EBikeCatalogPage() {
  return (
    <div className="ebike-catalog-page">
      <h1 className="ebike-catalog-page-title">Catalogo eBike</h1>
      {mockEBikes && mockEBikes.length > 0 ? (
        <div className="ebike-product-grid">
          {mockEBikes.map((ebike) => (
            <ProductCard
              key={ebike.id}
              productId={ebike.id}
              productType="ebike" // Important for correct link generation
              name={ebike.name}
              description={ebike.description}
              price={ebike.price}
              imageUrl={ebike.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p className="ebike-catalog-no-products">
          Al momento non ci sono eBike disponibili nel catalogo.
        </p>
      )}
    </div>
  );
}

export default EBikeCatalogPage;
