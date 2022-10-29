import React from 'react';
import { ListContainer } from '../listElements';

const ErrorLoading = ({ state, error }) => {
	return (
		<ListContainer>
			<p className="error-loading">{state === 'loading' ? 'Loading...' : `${error} 😥`}</p>
		</ListContainer>
	);
};

export default ErrorLoading;
