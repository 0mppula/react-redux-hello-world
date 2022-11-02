import React from 'react';
import { ListContainer } from './listElements';

const Loading = ({ loadingMessage = 'Loading...' }) => {
	return (
		<ListContainer>
			<p className="error-loading">{loadingMessage}</p>
		</ListContainer>
	);
};

export default Loading;
