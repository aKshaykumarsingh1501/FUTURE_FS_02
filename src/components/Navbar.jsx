import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>SafaMart</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/wishlist">Wishlist</Link>

        

        {user ? (
          <>
            <span style={{ marginLeft: "10px" }}>
              Hi, {user.name}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
