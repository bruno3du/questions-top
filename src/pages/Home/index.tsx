/** @format */

import { useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { HomeStyled } from "./styles";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../context/QuestionsContext";

export default function Home() {
  const navigate = useNavigate();
  const [amountQuestion, setAmountQuestion] = useState(10);
  const { startQuestion } = useQuestion();

  async function handleConfirm() {
    if (!amountQuestion) return;
    await startQuestion(+amountQuestion);

    navigate(`/confirmar/${+amountQuestion}`);
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
      </Container>
    </HomeStyled>
  );
}
