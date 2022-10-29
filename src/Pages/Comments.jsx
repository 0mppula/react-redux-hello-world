import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCommentsRequest, getCommentsSuccess, getCommentsFailure } from '../actions/comments';
import { ListContainer, ListItem, ListItemSection } from '../components/listElements';
import ErrorLoading from '../components/List/ErrorLoading';

const Comments = (props) => {
	const { loading, comments, error } = props;
	const { getCommentsRequest, getCommentsSuccess, getCommentsFailure } = props;

	useEffect(() => {
		const getComments = async () => {
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

		getComments();
	}, [getCommentsRequest, getCommentsSuccess, getCommentsFailure]);

	if (loading) {
		return <ErrorLoading state="loading" />;
	}

	if (error) {
		return <ErrorLoading state="error" error={error} />;
	}

	return (
		<ListContainer>
			{comments?.map((post, i) => (
				<ListItem key={(post.id, i)}>
					<h2>Comment {i + 1}</h2>

					<ListItemSection>
						<p>Email</p>
						<p>{post.email}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Name</p>
						<p>{post.name}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Comment</p>
						<p>{post.body}</p>
					</ListItemSection>
				</ListItem>
			))}
		</ListContainer>
	);
};

const mapStateToProps = (state) => ({
	comments: state.comments.comments,
	error: state.comments.error,
	loading: state.comments.loading,
});

const mapDispatchToProps = (dispatch) => ({
	getCommentsRequest: () => dispatch(getCommentsRequest()),
	getCommentsSuccess: (comments) => dispatch(getCommentsSuccess(comments)),
	getCommentsFailure: (error) => dispatch(getCommentsFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
