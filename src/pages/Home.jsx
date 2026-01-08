import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import RecentlyViewed from "../components/RecentlyViewed";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");
  const [visible, setVisible] = useState(4); // 🔥 LOAD MORE LOGIC

  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (sort === "low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="container">
      <h1 style={{ marginBottom: "20px" }}>Explore Products</h1>


      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <select
  className="sort-select"
  onChange={(e) => setSort(e.target.value)}
>
  <option value="none">Sort By</option>
  <option value="low">Price: Low → High</option>
  <option value="high">Price: High → Low</option>
</select>


      {/* 🛍️ PRODUCT GRID */}
      <div className="grid">
        {filtered.slice(0, visible).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* 🔄 LOAD MORE BUTTON */}
      {visible < filtered.length && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={() => setVisible(visible + 4)}>
            Load More
          </button>
        </div>
      )}

      {/* ❤️ RECENTLY VIEWED */}
      <RecentlyViewed />
    </div>
  );
};

export default Home;
