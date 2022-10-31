import React from 'react';
import { ListContainer } from './listElements';

const Error = ({ error }) => {
	return (
		<ListContainer>
			<p className="error-loading">{`${error} 😥`}</p>
		</ListContainer>
	);
};

export default Error;
