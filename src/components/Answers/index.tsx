/** @format */

import { useQuestion } from "../../context/QuestionsContext";
import Options from "../Options";

export default function Answers() {
  const { question } = useQuestion();
  const answers = question.options;
  const { setSelected } = useQuestion();

  // Selecionando Resposta
  function handleSetSelected(id: number) {
    setSelected(id);
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
          >
            {answer.text}
          </Options>
        ))}
    </div>
  );
}
