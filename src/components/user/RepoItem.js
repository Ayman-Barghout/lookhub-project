import React from "react";

const RepoItem = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    created_at,
    stargazers_count,
    watchers_count,
    language
  } = repo;
  return (
    <div className="repo-item">
      <div className="repo-item-header">
        <h5>
          <a href={html_url} target="_blank">
            {name}
          </a>
        </h5>
        {description && <p><i className="fas fa-info-circle"></i> {description}</p>}
        <p><i className="fas fa-calendar-day"></i> {new Date(created_at).toDateString()}</p>
      </div>
      <div className="repo-item-info">
        <p><i className="fas fa-star"></i>{stargazers_count}</p>
        <p><i className="fas fa-eye"></i>{watchers_count}</p>
        {language && <i className={`devicon-${language.toLowerCase()}-plain colored devicon`} />}
      </div>
    </div>
  );
};

export default RepoItem;
