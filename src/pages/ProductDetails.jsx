import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const product = products.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(
    product.images?.[0] || product.image
  );

  if (!product) return <h2 className="center">Product not found</h2>;

  return (
    <div className="product-details">
      {/* IMAGE SECTION */}
      <div className="image-section">
        <img src={activeImage} className="main-image" />

        <div className="thumbs">
          {(product.images || [product.image]).map((img, i) => (
            <img
              key={i}
              src={img}
              className={`thumb ${img === activeImage ? "active" : ""}`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p className="desc">
          Premium quality product. Designed for modern lifestyle use.
        </p>

        {/* ✅ FIXED BUTTON */}
        <button
          onClick={() => {
            if (!user) {
              navigate("/login");
              return;
            }

            addToCart(product);
            navigate("/cart"); // Flipkart-style redirect
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
