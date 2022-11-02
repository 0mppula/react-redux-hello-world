import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getUsersSuccess, getUsersFailure, getUsersRequest } from '../actions/users';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import Error from '../components/List/Error';
import Loading from '../components/List/Loading';
import UsersList from '../components/List/UsersList';
import useTitle from '../hooks/useTitle';

const Users = (props) => {
	const { users, error, loading } = props;
	const { getUsersRequest, getUsersSuccess, getUsersFailure } = props;
	useTitle('Users');

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
	}, [getUsersRequest, getUsersSuccess, getUsersFailure, users]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Users ({users?.length})</h2>
			</ListItemsHeader>

			<UsersList users={users} />
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
