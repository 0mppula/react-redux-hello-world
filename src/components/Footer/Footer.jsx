import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: var(--clr-dark);
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 5rem 0 2rem 0;
	gap: 0.25rem;

	a {
		color: var(--clr-light);
	}
	span {
		color: var(--clr-light);
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<span>Developed By:</span>
			<a href="https://github.com/0mppula" target="_blank" rel="noopener noreferrer">
				Omar Kraidié
			</a>
		</FooterContainer>
	);
};

export default Footer;
