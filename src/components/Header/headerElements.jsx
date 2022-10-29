import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: min(1200px, 95vw);
	padding: 0.5rem 0;
	border-bottom: solid 1px var(--clr-dark);
	background-color: var(--clr-light);

	h1 {
		margin-bottom: 0.5rem;
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
		font-size: 1.25rem;
		padding: 0.25rem 0.5rem;
		text-decoration: none;
	}
`;

export { HeaderContainer, Nav };
