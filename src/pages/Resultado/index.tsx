/** @format */

import { ResultadoStyled } from './styles';
import Header from '../../components/Header';
import Box from '../../components/Box';

export default function Resultado() {
	return (
		<ResultadoStyled>
			<Header />
			<h2>Resultado</h2>
			<div>
				<div>
					<span>Questões</span>
					<Box backgroundColor="#C4C4C4" >10</Box>
				</div>
				<div>
					<span>Acertos</span>
					<Box backgroundColor="#4BCD77">10</Box>
				</div>
				<div>
					<span>Erros</span>
					<Box backgroundColor="var(--red)">50</Box>
				</div>
			</div>
			<div>
				<button>Jogar Novamente</button>
			</div>
		</ResultadoStyled>
	);
}
