import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
      <h2>{user.name || user.login}</h2>
      <p className="bio">{user.bio || 'No bio available.'}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
