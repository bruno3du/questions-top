/** @format */

import { ReactChild } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
	children: ReactChild;
	backgroundColor: string;
	padding: string;
	onHandleClick?: () => void;
}

export default function Button({
	children,
	backgroundColor,
	padding,
	onHandleClick,
}: ButtonProps) {
	return (
		<ButtonStyled
			onClick={onHandleClick}
			backgroundColor={backgroundColor}
			padding={padding}>
			{children}
		</ButtonStyled>
	);
}
