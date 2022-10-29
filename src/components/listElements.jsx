import styled from 'styled-components';

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
		border-bottom: solid 1px #212121;
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

const ListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin: 2rem 0 6rem;

	.error-loading {
		width: 100%;
		text-align: center;
	}
`;

export { ListItem, ListContainer, ListItemSection };
