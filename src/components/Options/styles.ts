/** @format */

import styled from "styled-components";

interface OptionsStyledProps {
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean
}

export const OptionsStyled = styled.div<OptionsStyledProps>`
  width: 100%;
  padding: 5px 50px;
  background-color: var(--white);
  background-color: ${({ isSelected }) => isSelected && "var(--yellow)"};
  background-color: ${({ isWrong }) => isWrong && "var(--red)"};
  background-color: ${({ isCorrect }) => isCorrect && "#4BCD77"};
  border-radius: 10px;
  color: var(--colorContainer);
  color: ${({ isSelected }) => isSelected && "var(--white)"};
  color: ${({ isCorrect }) => isCorrect && "var(--white)"};

  cursor: pointer;
  margin-bottom: 3px;

  &:hover {
    filter: brightness(0.9);
  }
`;
