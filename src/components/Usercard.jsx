import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" width={"100"}/>
      <h2>{user.name || "No name available."}</h2>
      <p>@{user.login}</p>
      <p className="bio">{user.bio || 'No bio available.'}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserCard;
