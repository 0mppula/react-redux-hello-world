import React from 'react';

import { ListItem, ListItemSection } from './listElements';

const PostsList = ({ posts }) => {
	return (
		<>
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
		</>
	);
};

export default PostsList;
