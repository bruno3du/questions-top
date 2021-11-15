/** @format */

import styled from 'styled-components';

export const QuestionStyled = styled.div`
	> div {
		width: 80%;
		margin: auto;
		padding: 50px 70px;
		h2 {
			color: var(--yellow);
			margin-bottom: 30px;
			text-align: start;
		}
    p {
      color: var(--white);
      font-size: 1.2rem;
			margin-bottom: 2.5rem;
    }
	}
`;

export const ButtonPosition = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 50px;
	flex-wrap: wrap-reverse;
	gap: 5px;

`