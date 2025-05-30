import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import EBikeCatalogPage from './pages/EBikeCatalogPage';
import SparePartsCatalogPage from './pages/SparePartsCatalogPage';
import FlashOffersPage from './pages/FlashOffersPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateOrderPage from './pages/CreateOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/ebikes">eBikes</Link> |
          <Link to="/spare-parts">Spare Parts</Link> |
          <Link to="/flash-offers">Flash Offers</Link> |
          <Link to="/create-order">Create Order</Link> |
          <Link to="/order-history">Order History</Link> |
          <Link to="/account">Account</Link>
          {/* Link to a sample product detail page can be more specific if needed, e.g., /product/ebike/eb001 */}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ebikes" element={<EBikeCatalogPage />} />
          <Route path="/spare-parts" element={<SparePartsCatalogPage />} />
          <Route path="/flash-offers" element={<FlashOffersPage />} />
          <Route path="/product/:productType/:productId" element={<ProductDetailPage />} />
          <Route path="/create-order" element={<CreateOrderPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
