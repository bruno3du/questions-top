/** @format */

import styled from 'styled-components';

interface ButtonStyledProps {
	backgroundColor: string;
	padding: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	border: none;
	border-radius: 20px;
	padding: ${({ padding }) => padding};
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
`;
