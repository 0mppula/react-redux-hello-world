import React from 'react';

import { ListItem, ListItemSection } from './listElements';

const CommentsList = ({ comments }) => {
	return (
		<>
			{comments?.map((comment, i) => (
				<ListItem key={(comment.id, i)}>
					<h2>Comment {i + 1}</h2>

					<ListItemSection>
						<p>Email</p>
						<p>{comment.email}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Name</p>
						<p>{comment.name}</p>
					</ListItemSection>

					<ListItemSection>
						<p>Comment</p>
						<p>{comment.body}</p>
					</ListItemSection>
				</ListItem>
			))}
		</>
	);
};

export default CommentsList;
