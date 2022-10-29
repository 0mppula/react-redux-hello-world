import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Comments from './Pages/Comments';
import All from './Pages/All';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Container = styled.div`
	width: min(1200px, 95vw);
	margin: 0 auto;
	position: relative;
`;

function App() {
	return (
		<>
			<Container>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path="/users" element={<Users />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/comments" element={<Comments />} />
						<Route path="/all" element={<All />} />
						<Route path="*" element={<Navigate to="/users" />} />
					</Routes>
				</BrowserRouter>
			</Container>

			<Footer />
		</>
	);
}

export default App;
