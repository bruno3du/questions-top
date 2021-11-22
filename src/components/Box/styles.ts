/** @format */

import styled from 'styled-components';

interface BoxStyledProps {
  backgroundColor: string
}

export const BoxStyled = styled.div<BoxStyledProps>`
color: var(--colorContainer);
	width: 180px;
	height: 180px;
  border-radius: 10px;
  background-color: ${({backgroundColor})=> backgroundColor};
  font-size: 3.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
