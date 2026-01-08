import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        <div className="success-icon">🎉</div>

        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with us. Your order has been confirmed.</p>

        <div className="success-actions">
          <Link to="/orders" className="btn-outline">
            View Orders
          </Link>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
