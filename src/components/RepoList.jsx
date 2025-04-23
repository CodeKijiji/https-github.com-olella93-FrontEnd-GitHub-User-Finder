function RepoList({ repos }) {
  return (
    <div className="repo-list">
      <h3 className="repo-heading">
        Public Repositories ({repos.length})
      </h3>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <div className="repo-header">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                {repo.name}
              </a>
              <span className="repo-language">
                {repo.language || "N/A"}
              </span>
            </div>
            <p className="repo-description">
              {repo.description || "No description provided"}
            </p>
            <div className="repo-stats">
              <div className="stat-item">
                <h4>Repo Watchers: {repo.stargazers_count}</h4>
              </div>
              <div className="stat-item">
                <h4>Forks: {repo.forks_count}</h4>
              </div>
              <div className="stat-item">
                {new Date(repo.updated_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
