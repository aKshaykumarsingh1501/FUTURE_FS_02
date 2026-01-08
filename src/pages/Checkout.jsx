import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <div className="checkout-section">
          <label>Delivery Address</label>
          <input
            type="text"
            placeholder="Enter full delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="checkout-section">
          <label>Payment Method</label>
          <select value={payment} onChange={(e) => setPayment(e.target.value)}>
            <option value="cod">Cash on Delivery</option>
            <option disabled>UPI (Coming Soon)</option>
            <option disabled>Card (Coming Soon)</option>
          </select>
        </div>

        <div className="checkout-summary">
          <div>
            <span>Items</span>
            <span>
              {cart.reduce((s, i) => s + i.qty, 0)}
            </span>
          </div>
          <div>
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
        </div>

        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
