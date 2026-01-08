const Invoice = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders[orders.length - 1];

  if (!order) return <h2 className="center">No invoice found</h2>;

  const total = order.items.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <div className="container">
      <h1>Invoice</h1>
      <p><b>Order ID:</b> {order.id}</p>
      <p><b>Date:</b> {order.date}</p>

      <hr />

      {order.items.map((i) => (
        <p key={i.id}>
          {i.name} × {i.qty} = ₹{i.price * i.qty}
        </p>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
};

export default Invoice;
