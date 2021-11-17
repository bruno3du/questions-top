/** @format */

import styled from 'styled-components';

interface OptionsStyledProps {
	selected?: boolean;
	isSelected?: boolean;
}

export const OptionsStyled = styled.div<OptionsStyledProps>`
	width: 100%;
	padding: 5px 50px;
	background-color: ${(props) =>
		props.isSelected ? 'var(--yellow)' : 'var(--white)'};
	border-radius: 10px;
	color: ${(props) =>
		props.isSelected ? 'var(--white)' : 'var(--colorContainer)'};
	cursor: pointer;
	margin-bottom: 3px;

	&:hover {
		filter: brightness(0.9);
	}
`;
