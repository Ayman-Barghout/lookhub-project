import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		console.log(this.props.match.login);
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
		console.log(this.props.user);
		const { loading } = this.props;

		return this.props.user ? <div>{name}</div> : <Spinner />;
	}
}

export default User;
