import React from 'react';

class UserProfile extends React.Component{
	render() {
		return (<h1>User Profile for userId: {this.props.params.userId}</h1>);
	}
}

export default UserProfile;