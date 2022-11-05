import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getUsersSuccess, getUsersFailure, getUsersRequest } from '../actions/users';
import { getPostsRequest, getPostsSuccess, getPostsFailure } from '../actions/posts';
import { getCommentsRequest, getCommentsSuccess, getCommentsFailure } from '../actions/comments';
import UsersList from '../components/List/UsersList';
import PostsList from '../components/List/PostsList';
import CommentsList from '../components/List/CommentsList';
import Error from '../components/List/Error';
import Loading from '../components/List/Loading';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import useTitle from '../hooks/useTitle';

const All = (props) => {
	// Redux state
	const {
		users,
		UsersError,
		UsersLoading,
		posts,
		PostsError,
		PostsLoading,
		comments,
		CommentsError,
		CommentsLoading,
	} = props;

	// Actions
	const {
		getUsersSuccess,
		getUsersFailure,
		getUsersRequest,
		getPostsRequest,
		getPostsSuccess,
		getPostsFailure,
		getCommentsRequest,
		getCommentsSuccess,
		getCommentsFailure,
	} = props;
	useTitle('All');

	useEffect(() => {
		const getAll = async () => {
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
			if (!posts) {
				getPostsRequest();

				try {
					const { data: psts } = await axios.get(
						'https://jsonplaceholder.typicode.com/posts'
					);

					getPostsSuccess(psts);
				} catch (error) {
					getPostsFailure(error?.message || 'Error fetching the posts');
				}
			}
			if (!comments) {
				getCommentsRequest();

				try {
					const { data: cmnts } = await axios.get(
						'https://jsonplaceholder.typicode.com/comments'
					);

					// Only get 100 out of the 500 comments.
					getCommentsSuccess(cmnts.slice(0, 100));
				} catch (error) {
					getCommentsFailure(error?.message || 'Error fetching the comments');
				}
			}
		};

		getAll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [users, posts, comments]);

	if (UsersLoading || PostsLoading || CommentsLoading) {
		return <Loading />;
	}

	if (UsersError && PostsError && CommentsError) {
		return <Error errorMessage="Cannot get all items" />;
	}

	return (
		<ListContainer>
			{UsersLoading ? (
				<Loading loadingMessage="Loading users..." />
			) : (
				<>
					<ListItemsHeader>
						<h2>Users ({users?.length})</h2>
					</ListItemsHeader>
					<UsersList users={users} />
				</>
			)}

			{PostsLoading ? (
				<Loading loadingMessage="Loading posts..." />
			) : (
				<>
					<ListItemsHeader>
						<h2>Posts ({posts?.length})</h2>
					</ListItemsHeader>
					<PostsList posts={posts} />
				</>
			)}

			{CommentsLoading ? (
				<Loading loadingMessage="Loading comments..." />
			) : (
				<>
					<ListItemsHeader>
						<h2>Comments ({comments?.length})</h2>
					</ListItemsHeader>
					<CommentsList comments={comments} />
				</>
			)}
		</ListContainer>
	);
};

const mapPropsToState = (state) => ({
	// Users
	users: state.users.users,
	UsersError: state.users.error,
	UsersLoading: state.users.loading,
	// Posts
	posts: state.posts.posts,
	PostsError: state.posts.error,
	PostsLoading: state.posts.loading,
	// Comments
	comments: state.comments.comments,
	CommentsError: state.comments.error,
	CommentsLoading: state.comments.loading,
});

const mapDispatchToState = (dispatch) => ({
	// Users
	getUsersRequest: () => dispatch(getUsersRequest()),
	getUsersSuccess: (users) => dispatch(getUsersSuccess(users)),
	getUsersFailure: (error) => dispatch(getUsersFailure(error)),
	// Posts
	getPostsRequest: () => dispatch(getPostsRequest()),
	getPostsSuccess: (posts) => dispatch(getPostsSuccess(posts)),
	getPostsFailure: (error) => dispatch(getPostsFailure(error)),
	// Comments
	getCommentsRequest: () => dispatch(getCommentsRequest()),
	getCommentsSuccess: (comments) => dispatch(getCommentsSuccess(comments)),
	getCommentsFailure: (error) => dispatch(getCommentsFailure(error)),
});

export default connect(mapPropsToState, mapDispatchToState)(All);
