/** @format */

import { useQuestion } from "../../context/QuestionsContext";
import Options from "../Options";

interface AnswersType {
  text: string;
  isSelect: boolean;
  isCorrect: boolean;
  id: number;
}

export default function Answers() {
  const { question } = useQuestion();
  const answers = question.options;
  
  // console.log(answers);

  // Selecionando Resposta
  function handleSetSelected(id: number) {
    const newAnswers: AnswersType[] = answers.map((answer) => {
      if (answer.id === id) {
        answer.isSelect = !answer.isSelect;
        return answer;
      } else {
        answer.isSelect = false;
        return answer;
      }
    });
    return newAnswers
    // return setAnswers(newAnswers);
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
