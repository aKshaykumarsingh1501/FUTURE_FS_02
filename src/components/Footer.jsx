const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>FutureStore</h3>
        <p>Your one-stop modern ecommerce experience.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/cart">Cart</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} FutureStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
