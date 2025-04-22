import React from 'react'

const SearchUser = () => {
    const [username, setUsername] = useState('');
    
    const handleChange = (e) => setUsername(e.target.value);
  
    const [userData, setUserData] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm (username.trim());
    };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a user" 
        value={username} 
        onChange={handleChange} 
      />
    </div>
  )
}

export default SearchUser