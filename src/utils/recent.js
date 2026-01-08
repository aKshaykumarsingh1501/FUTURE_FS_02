export const addRecent = (product) => {
  const recents = JSON.parse(localStorage.getItem("recent")) || [];
  const filtered = recents.filter((p) => p.id !== product.id);
  const updated = [product, ...filtered].slice(0, 6);
  localStorage.setItem("recent", JSON.stringify(updated));
};

export const getRecent = () =>
  JSON.parse(localStorage.getItem("recent")) || [];
