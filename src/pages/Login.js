import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../config"; // Import the base URL from config file
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages([]);
    setSuccessMessage(""); // Clear success message on error
    try {
      const response = await axios.post(
        API_URLS.LOGIN,
        formData
      );

      setFormData({ username: "", password: "" });
      setErrorMessages([]);

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        const errorMessages = Object.values(errors).flat();
        setErrorMessages(errorMessages);
        setSuccessMessage(""); // Clear success message on error
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        {errorMessages.length > 0 && (
          <div className="message">
            {errorMessages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}

        {successMessage && <div className="message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
