/** @format */

import { ReactChild } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
	children: ReactChild;
	backgroundColor: string;
	padding: string;
	onHandleRedirect?: () => void;
}

export default function Button({
	children,
	backgroundColor,
	padding,
	onHandleRedirect,
}: ButtonProps) {
	return (
		<ButtonStyled
			onClick={onHandleRedirect}
			backgroundColor={backgroundColor}
			padding={padding}>
			{children}
		</ButtonStyled>
	);
}
