/** @format */

import { ReactChild } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
	children: ReactChild;
	backgroundColor: string;
	padding: string;
	style?: HTMLButtonElement;
}

export default function Button({
	children,
	backgroundColor,
	padding,
}: ButtonProps) {
	return (
		<ButtonStyled backgroundColor={backgroundColor} padding={padding}>
			{children}
		</ButtonStyled>
	);
}
