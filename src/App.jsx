import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchUser from "./components/SearchUser";
import UserProfile from "./components/UserProfile";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="home-link">
            <h1>GitHub User Finder</h1>
          </Link>
        </nav>

        <Routes>
          {/* Home/Search Page */}
          <Route path="/" element={<SearchPage />} />
          
          {/* Profile Page */}
          <Route path="/users/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

// Extracted Search Page Component
function SearchPage() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");
      const userData = await userRes.json();
      setUser(userData);

      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Username not found");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <SearchUser onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {user && (
        <div className="search-results">
          <UserCard user={user} />
          {repos.length > 0 && <RepoList repos={repos} />}
          
          
        </div>
      )}
    </>
  );
}

export default App;