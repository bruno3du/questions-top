/** @format */

import styled from 'styled-components';

export const HomeStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;

		h3 {
			color: var(--blue);
			margin-bottom: 45px;
			text-align: center;
		}

		input {
			border-radius: 20px;
			border: none;
			height: 35px;
			width: 80%;
			min-width: 250px;
			padding: 5px 0;
			font-weight: 700;
			font-size: 1.5rem;
			text-align: center;
			color: var(--colorContainer);
			background-color: var(--white);
			margin-bottom: 50px;
		}
	}
`;
