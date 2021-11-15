/** @format */

import styled from 'styled-components';

interface BoxStyledProps {
  backgroundColor: string
}

export const BoxStyled = styled.div<BoxStyledProps>`
color: var(--colorContainer);
	width: 200px;
	height: 200px;
  border-radius: 10px;
  background-color: ${({backgroundColor})=> backgroundColor};
  font-size: 4rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
