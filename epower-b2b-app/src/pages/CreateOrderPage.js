import React, { useState } from 'react';
import './CreateOrderPage.css';

function CreateOrderPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    productList: '',
    notes: '',
  });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionMessage(''); // Clear previous message

    // Collect form data
    const orderPayload = {
      ...formData,
      orderDate: new Date().toISOString(), // Add a timestamp
    };

    // Simulate API call
    console.log('--- Simulating Order Submission ---');
    console.log('Method: POST');
    console.log('URL: /api/resource/Ordine Rivenditore');
    console.log('Payload:', JSON.stringify(orderPayload, null, 2));

    // Simulate a successful response
    // In a real scenario, you would handle the fetch promise here
    setTimeout(() => {
      setSubmissionMessage('Ordine inviato con successo (simulazione)!');
      // alert('Ordine inviato con successo (simulazione)!'); // Alternative

      // Optionally clear the form
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        productList: '',
        notes: '',
      });
    }, 500); // Short delay to mimic network
  };

  return (
    <div className="create-order-page">
      <div className="create-order-form-container">
        <h1 className="create-order-page-title">Crea Nuovo Ordine</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Nome azienda</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productList">Lista prodotti + quantità</label>
            <textarea
              id="productList"
              name="productList"
              value={formData.productList}
              onChange={handleChange}
              rows="5"
              placeholder="Es. Urban Glide Pro - 2pz, Batteria LongLife 500Wh - 5pz"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Note aggiuntive</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button type="submit" className="submit-order-btn">
            Invia Ordine
          </button>
        </form>
        {submissionMessage && (
          <div className="submission-message success">
            {submissionMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateOrderPage;
