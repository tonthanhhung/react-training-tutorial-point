import React from 'react';
import {Link} from 'react-router';

class UserList extends React.Component {
	render() {
      return (
         <ul className="user-list">
			<li><Link to="users/2">Michael</Link></li>
			<li><Link to="users/1">Ryan</Link></li>
			<li><Link to="users/3">Dan</Link></li>
			<li><Link to="users/4">Matt</Link></li>
			<li><Link to="users/5">Tobias</Link></li>
			<li><Link to="users/6">Sebastian</Link></li>
		</ul>
      );
    }
}

export default UserList;