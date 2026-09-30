
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { total } = location.state || { total: 0 };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <p>Total Amount: ₹{total}</p>

      <div className="qr-section">
      <img
  src= "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi%3A%2F%2Fpay%3Fpa%3Dlingeshtram0018%40oksbi%26pn%3DLingesh%20Shop%26am%3D100%26cu%3DINR"
  alt="QR Code"
  class="qr-code"
/>

        <p>Scan this QR code to complete your payment:</p>
      
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Payment;
