/** @format */

import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { ConfirmarStyled } from "./styles";

export default function Confirmar() {
  const amountQuestion = useParams();
  const navigate = useNavigate();

   function handleStart() {
    navigate("/questao");
  }

  return (
    <ConfirmarStyled>
      <Header />
      <Container>
        <h2>Você escolheu responder {amountQuestion.id} perguntas.</h2>
        <p>
          Para iniciar as responder as perguntas agora, clicar em
          <span> Start</span>, <br />
          caso queira escolher outra quantia de perguntas novamente, clique em{" "}
          <span>Cancel</span>.
        </p>

        <div>
          <Button
            onHandleClick={handleStart}
            padding={"5px 80px"}
            backgroundColor="var(--yellow)"
          >
            Start
          </Button>

          <Link to="/">
            <Button padding={"7px 72px"} backgroundColor="var(--red)">
              Cancel
            </Button>
          </Link>
        </div>
      </Container>
    </ConfirmarStyled>
  );
}
