import {Link} from "react-router-dom";

function UserCard({ user, expandedView = false }) {
  return (
    <div className={`user-card ${expandedView ? 'expanded' : ''}`}>
      <img src={user.avatar_url} alt={user.login} width={expandedView ? 150 : 100} />
      <h2>{user.name || user.login}</h2>
      <p>@{user.login}</p>
      {expandedView && (
        <>
          <p className="user-bio">{user.bio || "No bio provided"}</p>
          <div className="user-stats">
            <span>📦 Repos: {user.public_repos}</span>
            <span>👥 Followers: {user.followers}</span>
            <span>🤝 Following: {user.following}</span>
          </div>
        </>
      )}
      <div className="user-actions"> 
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="profile-button"
        >
          View on GitHub
        </a>
        {!expandedView && ( 
          <Link 
            to={`/users/${user.login}`} 
            className="profile-button"
          >
            View Full Profile
          </Link>
        )}
      </div> 
    </div>
  );
}

export default UserCard;