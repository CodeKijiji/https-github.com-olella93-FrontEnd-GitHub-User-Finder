import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchUser from "./components/SearchUser";
import UserProfile from "./components/UserProfile";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Bookmarks from "./components/Bookmarks";
import UserCard from "./components/UseCard";
import RepoList from "./components/RepoList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLoginSuccess = (token) => {
    localStorage.setItem("access_token", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="home-link">
            <h1>GitHub User Finder</h1>
          </Link>
          {isLoggedIn && (
            <Link to="/bookmarks" className="nav-link">
              My Bookmarks
            </Link>
          )}
          <div className="auth-links">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            ) : (
              <>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
              </>
            )}
          </div>
        </nav>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/register" element={<RegisterForm onSuccess={handleLoginSuccess} />} />
              <Route path="/login" element={<LoginForm onSuccess={handleLoginSuccess} />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="*" element={<AuthPrompt />} />
            </>
          ) : (
            <>
              <Route path="/" element={<SearchPage />} />
              <Route path="/users/:username" element={<UserProfile />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="*" element={<SearchPage />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

function AuthPrompt() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Please register or login to continue.</h2>
    </div>
  );
}

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