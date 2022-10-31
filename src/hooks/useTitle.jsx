import { useEffect } from 'react';

/* Hook for changing the title on the page */
const useTitle = (title) => {
	useEffect(() => {
		const defaultTitle = document.title;
		const appTitle = 'React Redux Hello World';
		title && (document.title = `${title} | ${appTitle}`);

		// Clean up reset title to default title on component unmount.
		return () => (document.title = defaultTitle);
	}, [title]);
};

export default useTitle;
