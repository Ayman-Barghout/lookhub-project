import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;
		const { loading } = this.props;

		return this.props.user ? (
			<div>
				<div className="info-wrapper">
					<div className="info-section">

						<h2 className="info-name">{name}</h2>
						<h4 className="info-subinfo"><i className="fas fa-globe"></i> {blog !== "" ? blog : "N/A"}</h4>
						<h4 className="info-subinfo"><i className="fas fa-map-marker-alt"></i> {location !== null ? location : "N/A"}</h4>					</div>
					<img className="img round-img avatar-img" src={avatar_url} alt="User's avatar"></img>
					<a href={html_url} target="_blank"><i className="fab fa-github github-btn"></i></a>
				</div>
				<div className="bio-section">
					<p>{bio}</p>
				</div>
				<div className="stats-section">
					<h4>Stats:</h4>
					<div className="stats-info">
						<div className="stats-info-item">
							<p>Followers</p>
							<p><i className="fas fa-users"></i> {followers}</p>
						</div>
						<div className="stats-info-item">
							<p>Following</p>
							<p><i className="fas fa-user-friends"></i> {following}</p>
						</div>
						<div className="stats-info-item">
							<p>Public repos</p>
							<p><i className="fas fa-code-branch"></i> {public_repos} </p>
						</div>
						<div className="stats-info-item">
							<p>Public gists</p>
							<p><i className="fas fa-file-code"></i> {public_gists} </p>
						</div>
					</div>
				</div>
				<div className="repos-section">
					<ul>
						{this.props.userRepos.map( repo => {
							return <li>{repo.name}</li>
							}
						)}
					</ul>
				</div>
			</div>
		) : <Spinner />;
	}
}

export default User;
