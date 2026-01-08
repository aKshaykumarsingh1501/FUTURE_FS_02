import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0)
    return <h2 className="center">No items in wishlist ❤️</h2>;

  return (
    <div className="container">
      <h1>Your Wishlist</h1>
      <div className="grid">
        {wishlist.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
