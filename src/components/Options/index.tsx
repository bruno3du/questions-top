/** @format */

import { ReactNode } from "react";
import { OptionsStyled } from "./styles";

interface OptionsProps {
  children: ReactNode;
  onHandleClick: () => void;
  onSelected: boolean;
  id: number;
  isCorrect: boolean;
  showCorrectAnswer?: boolean;
}

export default function Options({
  children,
  onSelected,
  onHandleClick,
  id,
  isCorrect,
  showCorrectAnswer,
}: OptionsProps) {
  const isWrong = onSelected
  return (
    <OptionsStyled
      id={`${id}`}
      onClick={onHandleClick}
      isSelected={onSelected}
      isCorrect={showCorrectAnswer && isCorrect}
      isWrong={showCorrectAnswer && isWrong}
    >
      {children}
    </OptionsStyled>
  );
}
