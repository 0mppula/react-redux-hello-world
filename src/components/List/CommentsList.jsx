import React from 'react';

import { ListItem, ListItemSection } from '../listElements';

const CommentsList = ({ comments }) => {
	return (
		<>
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
		</>
	);
};

export default CommentsList;
