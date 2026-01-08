import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext"; // ✅ FIX
import Rating from "./Rating";
import { useState } from "react";
import Toast from "./Toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const { user } = useAuth(); // ✅ NOW VALID
  const [toast, setToast] = useState("");

  const wished = wishlist.find((p) => p.id === product.id);

  // ✅ Handles single image + multiple images
  const mainImage = product.images?.[0] || product.image;

  return (
    <>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}

      <motion.div
        className="product-card"
        whileHover={{ scale: 1.03 }}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={mainImage} alt={product.name} />

        {/* Wishlist */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
            setToast(wished ? "Removed from Wishlist" : "Added to Wishlist ❤️");
          }}
          style={{ cursor: "pointer", fontSize: "20px", marginBottom: "6px" }}
        >
          {wished ? "❤️" : "🤍"}
        </div>

        <h3>{product.name}</h3>
        <Rating value={Math.floor(3 + Math.random() * 2)} />
        <p>₹{product.price}</p>

        {/* ✅ FLIPKART STYLE */}
        <button
          onClick={(e) => {
            e.stopPropagation();

            if (!user) {
              navigate("/login"); // 🔒 force login
              return;
            }

            addToCart(product);
            navigate("/cart"); // 🛒 go to cart
          }}
        >
          Add to Cart
        </button>
      </motion.div>
    </>
  );
};

export default ProductCard;
