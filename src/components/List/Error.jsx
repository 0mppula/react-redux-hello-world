import React from 'react';
import { ListContainer } from './listElements';

const Error = ({ errorMessage }) => {
	return (
		<ListContainer>
			<p className="error-loading">{`${errorMessage} 😥`}</p>
		</ListContainer>
	);
};

export default Error;
