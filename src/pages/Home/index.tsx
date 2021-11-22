/** @format */

import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { HomeStyled } from "./styles";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../context/QuestionsContext";

export default function Home() {
  const [amountQuestion, setAmountQuestion] = useState(10);
  const [isPlayAgain, setIsPlayAgain] = useState(false);
  const { startQuestion, newListQuestion } = useQuestion();
  const navigate = useNavigate();

  useEffect(() => {
    if (newListQuestion.length > 0) {
      setIsPlayAgain(true);
    }
  }, [newListQuestion]);

  async function handleConfirm() {
    if (!amountQuestion) return;
    await startQuestion(+amountQuestion);

    navigate(`/confirmar/${+amountQuestion}`);
  }

  function handleReport() {
    navigate(`/resultado`);
  }

  return (
    <HomeStyled>
      <Header />
      <Container>
        <h3>
          Escolha o número de perguntas <br /> você deseja responder
        </h3>
        <input
          value={amountQuestion}
          onChange={(e) => setAmountQuestion(+e.target.value)}
          type="number"
        />

        <Button
          onHandleClick={handleConfirm}
          backgroundColor="var(--yellow)"
          padding={"5px 110px"}
        >
          Feito
        </Button>

        {isPlayAgain && (
          <div>
            <Button
              onHandleClick={handleReport}
              backgroundColor="#4BCD77"
              padding={"8px 70px"}
            >
              Ver meu ultimo resultado
            </Button>
          </div>
        )}
      </Container>
    </HomeStyled>
  );
}
