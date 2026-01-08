const steps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];

const OrderTimeline = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#38bdf8",
            }}
          />
          <p>{s}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderTimeline;
