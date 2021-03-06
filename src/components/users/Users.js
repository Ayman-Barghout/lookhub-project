import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ loading, users }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="container">

			<div className='grid-3'>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
			</div>
		);
	}
};

Users.propTypes = {
	loading: PropTypes.bool.isRequired,
	users: PropTypes.array.isRequired,
};

export default Users;
