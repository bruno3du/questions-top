/** @format */

import { QuestionsStyled, ResultadoStyled } from "./styles";
import Header from "../../components/Header";
import Box from "../../components/Box";
import { useQuestion } from "../../context/QuestionsContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Answers from "../../components/Answers";

export default function Resultado() {
  const { newListQuestion } = useQuestion();
  const [countCorrect, setCountCorrect] = useState(0);
  const quantidade = newListQuestion.length;

  useEffect(() => {
    const count = newListQuestion
      .map((question) => {
        const newList = question.options.filter(
          (option) => option.isSelect && option.isCorrect
        );
        return newList;
      })
      .filter((question) => question.length > 0);

    const amountCorrect = count.length;

    setCountCorrect(amountCorrect);

    // eslint-disable-next-line
  }, [newListQuestion]);

  return (
    <ResultadoStyled>
      <Header />
      <div>
        <h2>Parabéns esse foi o resultado final</h2>
      </div>
      <div>
        <div>
          <span>Questões</span>
          <Box backgroundColor="#C4C4C4">{quantidade}</Box>
        </div>
        <div>
          <span>Acertos</span>
          <Box backgroundColor="#4BCD77">{countCorrect}</Box>
        </div>
        <div>
          <span>Erros</span>
          <Box backgroundColor="var(--red)">{quantidade - countCorrect}</Box>
        </div>
      </div>
      <div>
        <h2>Veja seu Relatório abaixo:</h2>
      </div>
      {newListQuestion.map((question) => (
        <QuestionsStyled key={question.id}>
          <h3>{question.category} </h3>
          <p>{question.question}</p>
          <Answers answers={question.options} showCorrectAnswer/>
        </QuestionsStyled>
      ))}
      <div>
        <Link to="/">
          <button>Jogar Novamente</button>
        </Link>
      </div>
    </ResultadoStyled>
  );
}
