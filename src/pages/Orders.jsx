import { useAuth } from "../context/AuthContext";
import OrderTimeline from "../components/OrderTimeline";

const Orders = () => {
  const { user } = useAuth();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!user) return <h2 className="center">Please login</h2>;

  const userOrders = orders.filter((o) => o.user === user.email);
  if (!userOrders.length) return <h2 className="center">No orders yet</h2>;

  return (
    <div className="container">
      <h1>Your Orders</h1>
      {userOrders.map((o) => (
        <div
          key={o.id}
          style={{
            background: "#020617",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #1e293b",
            marginBottom: "20px",
          }}
        >
          <p><b>Order ID:</b> {o.id}</p>
          <p><b>Date:</b> {o.date}</p>
          {o.items.map((it) => (
            <p key={it.id}>{it.name} × {it.qty}</p>
          ))}
          <OrderTimeline />
        </div>
      ))}
    </div>
  );
};

export default Orders;
