import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm({ onSuccess }) {
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "",
    confirmPassword: "" 
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username.trim()) {
      setError("Username is required");
      return;
    }
    
    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!formData.password) {
      setError("Password is required");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    onSuccess();
    navigate("/");
  };

  return (
    <div className="auth-form-container">
      <h2>Create Account</h2>
      
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        {error && <p className="error-msg">{error}</p>}
        
        <button type="submit">
          Register
        </button>
      </form>
      
      <p className="auth-link">
        Already have an account?
        <span onClick={() => navigate("/login")}>Login</span>
      </p>
    </div>
  );
}

export default RegisterForm;