/** @format */

import { useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { HomeStyled } from './styles';

export default function Home() {
	const [amoutQuestion, setAmountQuestion] = useState(10);
	return (
		<HomeStyled>
			<Header />
			<Container>
				<h3>
					Escolha o número de perguntas <br /> você deseja responder
				</h3>
				<input
					value={amoutQuestion}
					onChange={(e) => setAmountQuestion(+e.target.value)}
					type='number'
				/>
				<button>Feito</button>
			</Container>
		</HomeStyled>
	);
}
