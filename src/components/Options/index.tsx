/** @format */

import { ReactNode } from 'react';
import { OptionsStyled } from './styles';

interface OptionsProps {
	children: ReactNode;
	onHandleClick: () => void;
	onSelected: boolean;
	id: number;
}

export default function Options({
	children,
	onSelected,
	onHandleClick,
	id,
}: OptionsProps) {
	return (
		<OptionsStyled id={`${id}`} onClick={onHandleClick} isSelected={onSelected}>
			{children}
		</OptionsStyled>
	);
}
