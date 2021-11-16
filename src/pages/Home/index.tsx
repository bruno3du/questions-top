/** @format */

import { useState } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { HomeStyled } from './styles';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();
	const [amoutQuestion, setAmountQuestion] = useState(10);

	function handleConfirm() {
		navigate(`/confirmar/${amoutQuestion}`);
	}
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

				<Button
					onHandleRedirect={handleConfirm}
					backgroundColor='var(--yellow)'
					padding={'5px 110px'}>
					Feito
				</Button>
			</Container>
		</HomeStyled>
	);
}
