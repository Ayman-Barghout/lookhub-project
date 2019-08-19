import React, { useState, useEffect } from "react";
import RepoItem from "../user/RepoItem";
import axios from "axios";

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const login = match.params.login;

  const getUser = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${
        process.env.GITHUB_CLIENT_ID
      }&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
  };

  const getUserRepos = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&client_id=${
        process.env.GITHUB_CLIENT_ID
      }&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    setUserRepos(res.data);
  };

  useEffect( () => {getUser(login)}, [user]);
  useEffect(() => {getUserRepos(login)}, [userRepos]);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  return (
    <div>
      <div className="info-wrapper">
        <div className="info-section">
          <h2 className="info-name">{name}</h2>
          <h4 className="info-subinfo">
            <i className="fas fa-globe" /> {blog !== "" ? blog : "N/A"}
          </h4>
          <h4 className="info-subinfo">
            <i className="fas fa-map-marker-alt" />{" "}
            {location !== null ? location : "N/A"}
          </h4>{" "}
        </div>
        <img
          className="img round-img avatar-img"
          src={avatar_url}
          alt="User's avatar"
        />
        <a href={html_url} target="_blank">
          <i className="fab fa-github github-btn" />
        </a>
      </div>
      <div className="bio-section">
        <p>{bio}</p>
      </div>
      <div className="stats-section">
        <h4>Stats:</h4>
        <div className="stats-info">
          <div className="stats-info-item">
            <p>Followers</p>
            <p>
              <i className="fas fa-users" /> {followers}
            </p>
          </div>
          <div className="stats-info-item">
            <p>Following</p>
            <p>
              <i className="fas fa-user-friends" /> {following}
            </p>
          </div>
          <div className="stats-info-item">
            <p>Public repos</p>
            <p>
              <i className="fas fa-code-branch" /> {public_repos}{" "}
            </p>
          </div>
          <div className="stats-info-item">
            <p>Public gists</p>
            <p>
              <i className="fas fa-file-code" /> {public_gists}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="repos-section">
      <h4>Repos:</h4>
        <ul>
          {userRepos.map(repo => {
            return <RepoItem repo={repo}></RepoItem>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default User;
