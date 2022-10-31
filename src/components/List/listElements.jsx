import styled from 'styled-components';

const ListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 6rem;

	.error-loading {
		width: 100%;
		text-align: center;
	}
`;

const ListItem = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #eee;
	width: calc(50% - (1rem * (1 / 2)));
	padding: 1rem;

	@media (max-width: 800px) {
		width: 100%;
	}

	h2 {
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: solid 1px var(--clr-dark);
	}
`;

const ListItemsHeader = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	border-bottom: solid 1px var(--clr-dark);
	background-color: var(--clr-dark);
	width: 100%;

	h2 {
		color: var(--clr-light);
	}
`;

const ListItemSection = styled.div`
	&:not(:last-child) {
		margin-bottom: 0.5rem;
	}

	p {
		&:nth-child(odd) {
			font-weight: bold;
		}
	}
`;

export { ListItem, ListContainer, ListItemSection, ListItemsHeader };
