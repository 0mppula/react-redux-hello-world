import { useEffect } from 'react';

/* Hook for changing the title */
const useTitle = (title) => {
	useEffect(() => {
		const defaultTitle = document.title;
		const appTitle = 'React Redux Hello World';
		title && (document.title = `${title} | ${appTitle}`);
		// following line is optional, but will reset title when component unmounts
		return () => (document.title = defaultTitle);
	}, [title]);
};

export default useTitle;
