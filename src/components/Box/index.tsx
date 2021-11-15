/** @format */

import { ReactNode } from 'react';
import { BoxStyled } from './styles';

interface BoxProps {
	children: ReactNode;
	backgroundColor: string
}

export default function Box({ children, backgroundColor }: BoxProps) {
	return <BoxStyled backgroundColor={backgroundColor}>{children}</BoxStyled>;
}
