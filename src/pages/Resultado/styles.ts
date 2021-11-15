/** @format */

import styled from 'styled-components';

export const ResultadoStyled = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		text-align: center;
		margin-bottom: 50px;
		font-size: 2.5rem;
	}

	> div {
		margin: auto 15px;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 15px;
		margin-bottom: 50px;

		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			span {
				font-weight: 700;
				font-size: 2rem;
				margin-bottom: 10px;
			}
		}
	}

	button {
		background-color: var(--yellow);
		border: none;
		border-radius: 10px;
		padding: 10px 69px;
		color: var(--white);
		font-size: 1.1rem;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.2s;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
