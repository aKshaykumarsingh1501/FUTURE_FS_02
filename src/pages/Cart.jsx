import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0)
    return <h2 className="center">🛒 Cart is empty</h2>;

  return (
    <div className="container" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px" }}>
      <div>
        <h1>Your Cart</h1>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <OrderSummary />
    </div>
  );
};

export default Cart;
