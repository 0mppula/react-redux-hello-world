const initialState = {
	users: null,
	error: '',
	loading: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_USERS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'GET_USERS_SUCCESS':
			return {
				users: action.payload,
				error: '',
				loading: false,
			};
		case 'GET_USERS_ERROR':
			return {
				error: action.payload,
				users: null,
				loading: false,
			};

		default:
			return { ...state };
	}
};

export default usersReducer;
