import { combineReducers } from 'redux';
import postsReducer from './posts';
import usersReducer from './users';
import commentsReducer from './comments';

const allReducers = combineReducers({
	posts: postsReducer,
	users: usersReducer,
	comments: commentsReducer,
});

export default allReducers;
