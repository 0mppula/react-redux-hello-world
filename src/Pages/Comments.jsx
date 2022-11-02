import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCommentsRequest, getCommentsSuccess, getCommentsFailure } from '../actions/comments';
import { ListContainer, ListItemsHeader } from '../components/List/listElements';
import Error from '../components/List/Error';
import Loading from '../components/List/Loading';
import CommentsList from '../components/List/CommentsList';
import useTitle from '../hooks/useTitle';

const Comments = (props) => {
	const { loading, comments, error } = props;
	const { getCommentsRequest, getCommentsSuccess, getCommentsFailure } = props;
	useTitle('Comments');

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
	}, [getCommentsRequest, getCommentsSuccess, getCommentsFailure, comments]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error errorMessage={error} />;
	}

	return (
		<ListContainer>
			<ListItemsHeader>
				<h2>Comments ({comments?.length})</h2>
			</ListItemsHeader>

			<CommentsList comments={comments} />
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
