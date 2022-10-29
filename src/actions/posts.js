const getPostsRequest = () => ({
	type: 'GET_POSTS_REQUEST',
});

const getPostsSuccess = (posts) => ({
	type: 'GET_POSTS_SUCCESS',
	payload: posts,
});

const getPostsFailure = (error) => ({
	type: 'GET_POSTS_FAILURE',
	payload: error,
});

export { getPostsRequest, getPostsSuccess, getPostsFailure };
