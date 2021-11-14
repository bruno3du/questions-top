/** @format */

import styled from 'styled-components';

export const HomeStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div {
		width: 60%;
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
			padding: 5px 0;
			font-weight: 700;
			font-size: 1.5rem;
			text-align: center;
			color: var(--colorContainer)
		}

		button {
			margin-top: 50px;
			height: 30px;
			background-color: var(--yellow);
			border: none;
			border-radius: 20px;
			padding: 20px 110px;
			color: var(--white);
			font-size: 1.1rem;
			font-weight: 700;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
