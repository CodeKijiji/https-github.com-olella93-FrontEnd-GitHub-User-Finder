import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import UseCard from './UseCard';
import RepoList from './RepoList';
import Loader from './Loader';
import Error from './Error';

function UserProfile() {
  const { username } = useParams(); 
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('User not found');
        const userData = await userRes.json();
        setUser(userData);

        // Fetch repositories
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repoData = await repoRes.json();
        setRepos(repoData);
      } catch (err) {
        setError(err.message || 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]); 

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!user) return <Error message="User not found" />;

  return (
    <div className="profile-page">
      <Link to="/" className="back-link">
        ← Back to Search
      </Link>
      
      <UserCard user={user} expandedView={true} />
      
      <div className="repos-section">
        <h2>Repositories ({repos.length})</h2>
        <RepoList repos={repos} />
      </div>
    </div>
  );
}

export default UserProfile;
