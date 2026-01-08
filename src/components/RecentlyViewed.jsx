import { getRecent } from "../utils/recent";
import ProductCard from "./ProductCard";

const RecentlyViewed = () => {
  const recent = getRecent();
  if (!recent.length) return null;

  return (
    <div style={{ marginTop: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>Recently Viewed</h2>
      <div className="grid">
        {recent.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
