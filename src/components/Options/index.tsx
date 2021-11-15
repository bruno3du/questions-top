/** @format */

import { ReactNode } from 'react';
import { OptionsStyled } from './styles';

interface OptionsProps {
	children: ReactNode;
}

export default function Options({ children }: OptionsProps) {
	
	return <OptionsStyled >{children}</OptionsStyled>;
}
