const initialState = {
	comments: null,
	error: '',
	loading: false,
};

const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_COMMENTS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'GET_COMMENTS_SUCCESS':
			return {
				comments: action.payload,
				error: '',
				loading: false,
			};
		case 'GET_COMMENTS_ERROR':
			return {
				error: action.payload,
				comments: null,
				loading: false,
			};

		default:
			return { ...state };
	}
};

export default commentsReducer