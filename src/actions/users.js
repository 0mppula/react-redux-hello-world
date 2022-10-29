const getUsersRequest = () => ({
	type: 'GET_USERS_REQUEST',
});

const getUsersSuccess = (users) => ({
	type: 'GET_USERS_SUCCESS',
	payload: users,
});

const getUsersFailure = (error) => ({
	type: 'GET_USERS_ERROR',
	payload: error,
});

export { getUsersRequest, getUsersSuccess, getUsersFailure };
