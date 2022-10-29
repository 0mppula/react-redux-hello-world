import React, { useEffect } from 'react';
import axios from 'axios';
import { getUsersSuccess, getUsersFailure, getUsersRequest } from '../actions/users';
import { connect } from 'react-redux';
import { ListItemSection, ListItem, ListContainer } from '../components/listElements';
import ErrorLoading from '../components/List/ErrorLoading';

const Users = (props) => {
	const { users, error, loading } = props;
	const { getUsersRequest, getUsersSuccess, getUsersFailure } = props;

	useEffect(() => {
		const getUsers = async () => {
			if (!users) {
				getUsersRequest();
				try {
					const { data: usrs } = await axios.get(
						'https://jsonplaceholder.typicode.com/users'
					);

					getUsersSuccess(usrs);
				} catch (error) {
					getUsersFailure(error?.message || 'Error fetching the users');
				}
			}
		};

		getUsers();
	}, [getUsersRequest, getUsersSuccess, getUsersFailure]);

	if (loading) {
		return <ErrorLoading state="loading" />;
	}

	if (error) {
		return <ErrorLoading state="error" error={error} />;
	}

	return (
		<ListContainer>
			{users?.map((user, i) => (
				<ListItem key={user.id + i}>
					<h2>User {i + 1}</h2>

					<ListItemSection>
						<p>Name</p>
						<p>{user.name}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Username</p>
						<p>{user.username}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Email</p>
						<p>{user.email}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Address</p>
						<p>
							{`${user.address.street}
						${user.address.suite} 
						${user.address.city} 
						${user.address.zipcode}`}
						</p>
					</ListItemSection>

					<ListItemSection>
						<p>Phone</p>
						<p>{user.phone}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Website</p>
						<p>{user.website}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Phone</p>
						<p>{user.phone}</p>
					</ListItemSection>
				</ListItem>
			))}
		</ListContainer>
	);
};

const mapStateToProps = (state) => ({
	users: state.users.users,
	error: state.users.error,
	loading: state.users.loading,
});

const mapDispatchToProps = (dispatch) => ({
	getUsersRequest: () => dispatch(getUsersRequest()),
	getUsersSuccess: (users) => dispatch(getUsersSuccess(users)),
	getUsersFailure: (error) => dispatch(getUsersFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
