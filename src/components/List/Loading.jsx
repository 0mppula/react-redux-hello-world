import React from 'react';
import { ListContainer } from './listElements';

const Loading = ({ message = 'Loading...' }) => {
	return (
		<ListContainer>
			<p className="error-loading">{message}</p>
		</ListContainer>
	);
};

export default Loading;
