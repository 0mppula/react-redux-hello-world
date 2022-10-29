const initialState = {
	posts: null,
	error: '',
	loading: false,
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_POSTS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'GET_POSTS_SUCCESS':
			return {
				posts: action.payload,
				error: '',
				loading: false,
			};
		case 'GET_POSTS_ERROR':
			return {
				error: action.payload,
				posts: null,
				loading: false,
			};

		default:
			return { ...state };
	}
};

export default postsReducer