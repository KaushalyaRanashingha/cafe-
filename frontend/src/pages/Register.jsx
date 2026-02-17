import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../style/Login.css';

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/users/register",
        { name, email, password }
      );

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      console.log("Register Error:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Register</h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">
            Register
          </button>

        </form>

      </div>
    </div>
  );
};

export default Register;
