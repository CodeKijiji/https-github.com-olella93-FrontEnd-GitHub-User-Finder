import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ onSuccess }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
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
    
    if (!formData.password) {
      setError("Password is required");
      return;
    }

    onSuccess();
    navigate("/");
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
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
          type="password" 
          name="password" 
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-msg">{error}</p>}
        
        <button type="submit">
          Login
        </button>
      </form>
      
      <p className="auth-link">
        Don't have an account? 
        <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
}

export default LoginForm;