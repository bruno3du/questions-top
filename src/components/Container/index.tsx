/** @format */

import { ReactNode } from 'react';
import { ContainerStyled } from './styles';

interface ContainerProps {
	children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
	return <ContainerStyled>{children}</ContainerStyled>;
}
