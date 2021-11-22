/** @format */

import Answers from "../../components/Answers";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { useQuestion } from "../../context/QuestionsContext";
import { useNavigate } from "react-router";

import { ButtonPosition, QuestionStyled } from "./styles";

export default function Question() {
  const { previousQuestion, nextQuestion, isFinished } = useQuestion();
  const { question } = useQuestion();
  const navigate = useNavigate();
  const aspas = question.question.replace(/&quot;/g, '"');
  const newText = aspas && aspas.replace(/&#039;/g, "'");

  function handlePreviousQuestion() {
    previousQuestion();
  }

  function handleNextQuestion() {
    if (isFinished) {
      navigate("/resultado");
    }
    nextQuestion();
  }

  return (
    <QuestionStyled>
      <Header />
      <Container>
        <h2>{question.category} </h2>
        <p>{newText}</p>

        <Answers answers={question.options} isSelectable />

        <ButtonPosition>
          <Button
            onHandleClick={handlePreviousQuestion}
            backgroundColor="var(--red)"
            padding="5px 50px"
          >
            Previous
          </Button>
          <Button
            onHandleClick={handleNextQuestion}
            backgroundColor="var(--yellow)"
            padding="5px 68px"
          >
            {isFinished ? "Finalizar" : "Next"}
          </Button>
        </ButtonPosition>
      </Container>
    </QuestionStyled>
  );
}
