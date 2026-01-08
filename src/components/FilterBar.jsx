import products from "../data/products";

const FilterBar = ({ search, setSearch, category, setCategory }) => {
  const categories = ["All", ...new Set(products.map(p => p.category))];

  return (
    <div className="filter-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
