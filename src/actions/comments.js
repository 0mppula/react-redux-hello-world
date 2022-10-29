const getCommentsRequest = () => ({
	type: 'GET_COMMENTS_REQUEST',
});

const getCommentsSuccess = (users) => ({
	type: 'GET_COMMENTS_SUCCESS',
	payload: users,
});

const getCommentsFailure = (error) => ({
	type: 'GET_COMMENTS_ERROR',
	payload: error,
});

export { getCommentsRequest, getCommentsSuccess, getCommentsFailure };
