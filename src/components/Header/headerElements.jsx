import styled from 'styled-components';

const HeaderContainer = styled.div`
	padding: 0.5rem 0;
	border-bottom: solid 1px #212121;
	background-color: #fefefe;
	position: sticky;
	top: 0;

	h1 {
		text-align: center;
	}
`;

const Nav = styled.nav`
	padding: 0.5rem 0;

	ul {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: 1rem;
	}

	li a.active,
	li a:hover {
		border-bottom: solid 1px #212112 !important;
	}

	li a {
		text-decoration: none;
	}
`;

export { HeaderContainer, Nav };
