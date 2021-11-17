/** @format */

import Options from '../Options';
import { useAnswers } from '../../hooks/useAnswers';

interface AnswersType {
	text: string;
	isSelect: boolean;
	isCorrect: boolean;
	id: number;
}

export default function Answers() {
	const { answers, setAnswers } = useAnswers();

	// Selecionando Resposta
	function handleSetSelected(id: number) {
		const newAnswers: AnswersType[] = answers.map((answer) => {
			if (answer.id === id) {
				answer.isSelect = !answer.isSelect;
				return answer;
			} else {
				answer.isSelect = false;
				return answer;
			}
		});

		console.log(newAnswers);
		setAnswers(newAnswers);
	}

	return (
		<div>
			{answers.map((answer) => (
				<Options
					id={answer.id}
					onSelected={answer.isSelect}
					key={answer.id}
					onHandleClick={() => {
						handleSetSelected(answer.id);
					}}>
					{answer.text}
				</Options>
			))}
		</div>
	);
}
