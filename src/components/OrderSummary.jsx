import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

const itemCount = cart.reduce(
  (sum, item) => sum + item.qty,
  0
);


  const gst = Math.round(subtotal * 0.18);
  const delivery = 49;
  const total = subtotal + gst + delivery;

  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid #1e293b",
        padding: "20px",
        borderRadius: "14px",
      }}
    >
      <h2>Order Summary</h2>

      
      <p>Subtotal: ₹{subtotal}</p>
      <p>GST (18%): ₹{gst}</p>
      <p>Delivery: ₹{delivery}</p>

      <hr style={{ borderColor: "#1e293b" }} />

      <h3>Total: ₹{total}</h3>

      <button
        style={{ marginTop: "15px", width: "100%" }}
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
