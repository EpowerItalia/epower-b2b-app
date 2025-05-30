import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="homepage">
      <h1>Benvenuto in ePower B2B</h1>
      <div className="card-container">
        <Link to="/ebikes" className="card">
          {/* <div className="icon-placeholder">🚲</div> You can add an icon here */}
          <h2>Catalogo eBike</h2>
          <p>Esplora la nostra gamma completa di eBike personalizzate e accessori.</p>
        </Link>

        <Link to="/spare-parts" className="card">
          {/* <div className="icon-placeholder">⚙️</div> You can add an icon here */}
          <h2>Catalogo Ricambi</h2>
          <p>Trova tutti i pezzi di ricambio originali per le tue eBike.</p>
        </Link>

        <Link to="/flash-offers" className="card">
          {/* <div className="icon-placeholder">⚡️</div> You can add an icon here */}
          <h2>Offerte Flash</h2>
          <p>Scopri promozioni esclusive e offerte a tempo limitato.</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
