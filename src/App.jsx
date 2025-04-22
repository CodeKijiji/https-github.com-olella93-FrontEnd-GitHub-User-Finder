import { useState } from "react";
import SearchUser from "./components/SearchUser";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import './index.css';
import './App.css';

function App() {
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
      console.error("Caught error:", err);
      setError(err instanceof Error ? err.message : "Username not found");
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div className="App">
      <h1>GitHub User Finder</h1>
      <SearchUser onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <Error message={error} />}
      {user && <UserCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}

export default App;
