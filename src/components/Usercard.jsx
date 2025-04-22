function UserCard({user}) {

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" width="100"/>
      <h2>{user.name || "No Name Available."}</h2>
      <p>@{user.login}</p>
      <p className="bio">{user.bio || 'No bio provided'}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default UserCard;
