const Rating = ({ value = 4 }) => {
  return (
    <div style={{ color: "#fbbf24", marginBottom: "6px" }}>
      {"★".repeat(value)}{"☆".repeat(5 - value)}
    </div>
  );
};

export default Rating;
