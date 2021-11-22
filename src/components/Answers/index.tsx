/** @format */

import { useQuestion } from "../../context/QuestionsContext";
import Options from "../Options";

interface AnswersType {
  text: string;
  isSelect: boolean;
  isCorrect: boolean;
  id: number;
}

interface AnswersProps {
  answers: AnswersType[];
  isSelectable?: boolean;
  showCorrectAnswer?: boolean;
}

export default function Answers({ answers, isSelectable, showCorrectAnswer }: AnswersProps) {
  const { setSelected } = useQuestion();

  // Selecionando Resposta
  function handleSetSelected(id: number) {
    if (isSelectable) {
      setSelected(id);
    }
  }

  return (
    <div>
      {answers &&
        answers.map((answer) => (
          <Options
            id={answer.id}
            onSelected={answer.isSelect}
            key={answer.id}
            onHandleClick={() => {
              handleSetSelected(answer.id);
            }}
            isCorrect={answer.isCorrect}
            showCorrectAnswer={showCorrectAnswer}
          >
            {answer.text}
          </Options>
        ))}
    </div>
  );
}
