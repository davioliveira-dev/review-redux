/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from '../../actions/user';

function UsersComponent({ getUserDetails, userReducer }) {
	const [userDetails, setUserDetails] = useState([]);

	const handleButtonClick = () => {
		console.log('Step 1: Make a call to Action-creator from Users Component');
		getUserDetails();
	};

	useEffect(() => {
		console.log('Step 5: Inside UseEffect of User Component to update the UI');
		setUserDetails(userReducer.userDetails);
	}, [userReducer.userDetails]);

	return (
		<div className="container">
			<button className="btn" value="Click me" onClick={handleButtonClick}> Fetch Data</button>
			<table>
				<tbody>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Website</th>
					</tr>
					{userDetails && userDetails.map((user, key) => (
						<tr key={key}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>{user.website}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

const mapStateToProps = state => ({
	userReducer: state.userReducer,
});

const mapDispatchToProps = {
	getUserDetails,
};

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
