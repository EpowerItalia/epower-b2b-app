import React from 'react';
import ProductCard from '../components/ProductCard';
import mockSpareParts from '../data/mockSpareParts.json';
import './SparePartsCatalogPage.css';

function SparePartsCatalogPage() {
  return (
    <div className="spare-parts-catalog-page">
      <h1 className="spare-parts-catalog-page-title">Catalogo Ricambi</h1>
      {mockSpareParts && mockSpareParts.length > 0 ? (
        <div className="spare-parts-product-grid">
          {mockSpareParts.map((part) => (
            <ProductCard
              key={part.id}
              productId={part.id}
              productType="ricambio" // Important for correct link generation
              name={part.name}
              description={part.description}
              price={part.price}
              imageUrl={part.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p className="spare-parts-catalog-no-products">
          Al momento non ci sono ricambi disponibili nel catalogo.
        </p>
      )}
    </div>
  );
}

export default SparePartsCatalogPage;
