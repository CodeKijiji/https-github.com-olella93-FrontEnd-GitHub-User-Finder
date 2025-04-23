import React, { useState } from 'react';
import UserCard from './components/UserCard';
import './index.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
      setUserData(null);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <UserCard user={userData} />
    </div>
  );
};

export default App;
