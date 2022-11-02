import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getPostsRequest, getPostsSuccess, getPostsFailure } from '../actions/posts';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import Error from '../components/List/Error';
import Loading from '../components/List/Loading';
import PostsList from '../components/List/PostsList';
import useTitle from '../hooks/useTitle';

const Posts = (props) => {
	const { loading, posts, error } = props;
	const { getPostsRequest, getPostsSuccess, getPostsFailure } = props;
	useTitle('Posts');

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
	}, [getPostsRequest, getPostsSuccess, getPostsFailure, posts]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Posts ({posts?.length})</h2>
			</ListItemsHeader>

			<PostsList posts={posts} />
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
