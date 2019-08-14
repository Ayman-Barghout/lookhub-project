import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = props => {
	const [text, setText] = useState('');

	const onChange = e => {
		setText(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			props.setAlert('Please enter a user name', 'light');
		} else {
			props.searchUsers(text);
			setText('');
		}
	};

	return (
		<div className="container">

		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					value={text}
					onChange={onChange}
					placeholder='Enter GitHub user name..'
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
			{props.showClear && (
				<button className='btn btn-light btn-block' onClick={props.clearUsers}>
					Clear
				</button>
			)}
		</div>
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
