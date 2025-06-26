import React, { useState } from 'react';
import API from '../api';

function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      localStorage.setItem('access_token', res.data.access_token);
      onLogin?.(); 
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
