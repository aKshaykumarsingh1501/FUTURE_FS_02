import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>
          −
        </button>

        <strong>{item.qty}</strong>

        <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>

        <button
          style={{ background: "#ef4444", color: "#fff" }}
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
