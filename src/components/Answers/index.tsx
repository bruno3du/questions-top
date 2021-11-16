/** @format */

import { useEffect, useState } from 'react';
import { useQuestion } from '../../context/QuestionsContext';
import Options from '../Options';

export default function Answers() {
	const { incorrect_answers, correct_answer } = useQuestion();
	const [answers, setAnswers] = useState<string[]>([]);

	useEffect(() => {
		if (!incorrect_answers || !correct_answer) return;
		// Juntando respostas em um array
		const preparingtAnswer = incorrect_answers;
		preparingtAnswer.push(correct_answer);

		// Embaralhando Respostas
		const currenctAnswer = shuffle(preparingtAnswer);

		setAnswers(currenctAnswer);
	}, [incorrect_answers, correct_answer]);

	console.log(answers, correct_answer);

	function shuffle(elements: Array<string>) {
		return elements
			.map((element) => ({ element, aleatorio: Math.random() }))
			.sort((obj, obj2) => obj.aleatorio - obj2.aleatorio)
			.map((obj) => obj.element);
	}

	return (
		<div>
			{answers.map((answer) => (
				<Options>{answer}</Options>
			))}
		</div>
	);
}
