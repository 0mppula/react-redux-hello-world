import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getPostsRequest, getPostsSuccess, getPostsFailure } from '../actions/posts';
import { ListContainer, ListItem, ListItemSection } from '../components/listElements';
import ErrorLoading from '../components/List/ErrorLoading';

const Posts = (props) => {
	const { loading, posts, error } = props;
	const { getPostsRequest, getPostsSuccess, getPostsFailure } = props;

	useEffect(() => {
		const getPosts = async () => {
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
		};

		getPosts();
	}, [getPostsRequest, getPostsSuccess, getPostsFailure]);

	if (loading) {
		return <ErrorLoading state="loading" />;
	}

	if (error) {
		return <ErrorLoading state="error" error={error} />;
	}

	return (
		<ListContainer>
			{posts?.map((post, i) => (
				<ListItem key={(post.id, i)}>
					<h2>Post {i + 1}</h2>

					<ListItemSection>
						<p>Title</p>
						<p>{post.title}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Post</p>
						<p>{post.body}</p>
					</ListItemSection>
				</ListItem>
			))}
		</ListContainer>
	);
};

const mapStateToProps = (state) => ({
	posts: state.posts.posts,
	error: state.posts.error,
	loading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({
	getPostsRequest: () => dispatch(getPostsRequest()),
	getPostsSuccess: (posts) => dispatch(getPostsSuccess(posts)),
	getPostsFailure: (error) => dispatch(getPostsFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
