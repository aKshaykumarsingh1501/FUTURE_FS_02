import { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 2000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
};

const styles = {
  toast: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    background: "#020617",
    color: "#e5e7eb",
    border: "1px solid #38bdf8",
    padding: "12px 16px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(56,189,248,.25)",
    zIndex: 1000,
  },
};

export default Toast;
