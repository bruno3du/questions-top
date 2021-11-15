/** @format */

import styled from 'styled-components';

export const ConfirmarStyled = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > div {
		width: 600px;
		h2 {
			color: var(--blue);
			margin-bottom: 30px;
			text-align: center;
		}

		p {
			text-align: center;
		}

		span {
			color: var(--blue);
		}

		> div {
			margin-top: 35px;
			display: flex;
			justify-content: space-between;
		}
	}
`;
