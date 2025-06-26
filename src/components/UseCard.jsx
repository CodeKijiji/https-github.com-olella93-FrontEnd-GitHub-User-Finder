import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function UserCard({ user, expandedView = false }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [error, setError] = useState("");

  const handleBookmark = async () => {
    try {
      await API.post("/items/", {
        github_username: user.login,
        note: "Saved via bookmark",
        category: "GitHub Users"
      });
      setBookmarked(true);
    } catch (err) {
      console.error(err);
      setError("Failed to bookmark user");
    }
  };

  return (
    <div className={`user-card ${expandedView ? "expanded" : ""}`}>
      <img
        src={user.avatar_url}
        alt={user.login}
        width={expandedView ? 150 : 100}
      />
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
          <Link to={`/users/${user.login}`} className="profile-button">
            View Full Profile
          </Link>
        )}
        <button
          onClick={handleBookmark}
          disabled={bookmarked}
          className="profile-button"
        >
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default UserCard;
