/** @format */

import Answers from '../../components/Answers';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { useQuestion } from '../../context/QuestionsContext';

import { ButtonPosition, QuestionStyled } from './styles';

export default function Question() {
	const { previousQuestion, nextQuestion } = useQuestion();
	const { question } = useQuestion();

	function handlePreviousQuestion() {
		previousQuestion();
	}

	function handleNextQuestion() {
		nextQuestion();
	}

	return (
		<QuestionStyled>
			<Header />
			<Container>
				<h2>{question.category} </h2>
				<p>{question.question}</p>

				<Answers />

				<ButtonPosition>
					<Button
						onHandleClick={handlePreviousQuestion}
						backgroundColor='var(--red)'
						padding='5px 50px'>
						Previous
					</Button>
					<Button
						onHandleClick={handleNextQuestion}
						backgroundColor='var(--yellow)'
						padding='5px 68px'>
						Next
					</Button>
				</ButtonPosition>
			</Container>
		</QuestionStyled>
	);
}
