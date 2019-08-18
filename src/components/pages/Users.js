import React, {useState} from "react";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";
import Search from "../users/Search";
import UsersComponent from "../users/Users";
import axios from "axios";



const Users = () => {

	const [users, setUsers] = useState([]);
	const [alert, setAlert] = useState(null);
	const [loading, setLoading] = useState(false);

	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};
	
	const handleAlert = (msg, type) => {
		setAlert({ msg, type });
	
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	};
	
	const getUsers = async text => {
		setLoading(true);
	  
		const res = await axios.get(
		  `https://api.github.com/search/users?q=${text}&client_id=${
			process.env.GITHUB_CLIENT_ID
		  }&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
		);
		setLoading(false);
		setUsers(res.data.items);
	  };

  return (
    <div className="container">
      <Alert alert={alert} />
      <Search
        searchUsers={getUsers}
        clearUsers={clearUsers}
        showClear={users.length > 0}
        setAlert={handleAlert}
      />
      <UsersComponent loading={loading} users={users} />
    </div>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
