function RepoList({ repos }) {
  return (
    <div className="repo-list">
      <h3 className="repo-heading">Public Repositories</h3>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              {repo.name}
            </a>
            <p className="repo-description">
              {repo.description || "No description"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
