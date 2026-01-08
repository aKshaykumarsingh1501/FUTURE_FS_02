import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const RecentlyViewed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setItems(data);
  }, []);

  if (items.length === 0) return null;

  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>Recently Viewed</h2>
      <div className="grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
