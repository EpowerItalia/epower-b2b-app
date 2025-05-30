import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockEBikes from '../data/mockEBikes.json';
import mockSpareParts from '../data/mockSpareParts.json';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { productType, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let foundProduct = null;

    if (productType === 'ebike') {
      foundProduct = mockEBikes.find((p) => p.id === productId);
    } else if (productType === 'ricambio') {
      foundProduct = mockSpareParts.find((p) => p.id === productId);
    } else if (productType === 'offer' || productType === 'accessorio') {
      // Try finding in flash offers if it's an offer or generic accessory from there
      // For now, flash offers are not directly linked to detail pages in this manner
      // but this structure allows future expansion.
      // We'd need to import mockFlashOffers.json here.
      // For this task, we assume offers might not have their own "detail" page via this route
      // or their productId points to an existing ebike/ricambio.
      // If fo003 (Kit Manutenzione) was clicked, it would need a source.
      // For now, let's assume it might be an eBike or Ricambio if productType is not 'ebike' or 'ricambio'.
      // This part might need more robust handling if offers have unique detail pages.
      console.warn(`Product type "${productType}" might not have a dedicated catalog. Trying to find in eBikes/Spare Parts.`);
      // Fallback search if productType is not explicitly ebike or ricambio
      foundProduct = mockEBikes.find((p) => p.id === productId) || mockSpareParts.find((p) => p.id === productId);
    }
    // Add more sources if needed, e.g., mockFlashOffers.json

    setProduct(foundProduct);
    setLoading(false);
  }, [productId, productType]);

  if (loading) {
    return <div className="product-detail-loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="product-detail-not-found">Product not found. (ID: {productId}, Type: {productType})</div>;
  }

  // Use a placeholder if imageUrl is empty or missing
  const ImageComponent = product.imageUrl ? (
    <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
  ) : (
    <div className="product-detail-image-placeholder">
      <span>No Image Available</span>
    </div>
  );

  const formattedPrice = typeof product.price === 'number'
    ? `€${product.price.toFixed(2)}`
    : (product.offerPrice ? `€${parseFloat(product.offerPrice).toFixed(2)}` : product.price);


  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image-wrapper">
          {ImageComponent}
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">{formattedPrice}</p>
          <button className="product-detail-add-to-order-btn">
            Aggiungi all’Ordine
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
