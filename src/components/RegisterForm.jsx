import React, { useState } from 'react';
import API from '../api';


function RegisterForm({ onLogin }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await API.post('/register', form);
      localStorage.setItem('access_token', res.data.access_token);
      setSuccess("Registration successful!");
      onLogin?.();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="username" 
          placeholder="Username" 
          value={form.username}
          onChange={handleChange}
          required 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={form.email}
          onChange={handleChange}
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          value={form.password}
          onChange={handleChange}
          required 
        />
        <button type="submit">Register</button>
      </form>

      {success && <p className="success-msg">{success}</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default RegisterForm;
