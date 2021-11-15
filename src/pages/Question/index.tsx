/** @format */

import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Options from '../../components/Options';
import { ButtonPosition, QuestionStyled } from './styles';

export default function Question() {
	return (
		<QuestionStyled>
			<Header />
			<Container>
				<h2>Pergunta 1</h2>
				<p>Which of these is not a member of the virtual band Gorillaz?</p>
				<Options>Phi Cypher</Options>
				<Options>Phi Cypher</Options>
				<Options>Phi Cypher</Options>
				<Options>Phi Cypher</Options>

				<ButtonPosition>
					<Button backgroundColor='var(--red)' padding='5px 50px'>
						Previous
					</Button>
					<Button backgroundColor='var(--yellow)' padding='5px 68px'>
						Next
					</Button>
				</ButtonPosition>
			</Container>
		</QuestionStyled>
	);
}
