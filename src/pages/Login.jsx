import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    login(name, email);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <p className="login-sub">Login to continue shopping</p>

      <div className="login-form">
        <input
          className="login-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="login-input"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
