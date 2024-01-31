// BillingDetails.js
import React from 'react';

const BillingDetails = ({ price, product, paymentMethods, cardInfo, handlePaymentMethodChange, handleInputChange }) => {
    return (
        <div>
            <h2>Billing Details</h2>
            <p>Price: {price}</p>
            <p>Product: {product}</p>
            <label>Select Payment Method:</label>
            <select value={cardInfo.paymentMethod} onChange={handlePaymentMethodChange}>
                {paymentMethods.map((method, index) => (
                    <option key={index} value={method}>{method}</option>
                ))}
            </select>
            <label>Card Number:</label>
            <input type="text" name="cardNumber" value={cardInfo.cardNumber} onChange={handleInputChange} />
            <label>Expiration Date:</label>
            <input type="text" name="expirationDate" value={cardInfo.expirationDate} onChange={handleInputChange} />
            <label>CVV:</label>
            <input type="text" name="cvv" value={cardInfo.cvv} onChange={handleInputChange} />
        </div>
    );
};

export default BillingDetails;
