import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className='card text-center'>
			<img src={avatar_url} alt='' className='round-img' style={{ width: '60px' }} />
			<h3>{login}</h3>
			<Link to={`/users/user/${login}`} className='btn btn-dark btn-sm'>
				View
			</Link>
		</div>
	);
};

UserItem.propTypes = {
	login: PropTypes.string,
	avatar_url: PropTypes.string,
	html_url: PropTypes.string,
};

export default UserItem;
