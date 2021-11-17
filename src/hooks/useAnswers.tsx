/** @format */

import { useCallback, useEffect, useState } from 'react';
import { useQuestion } from '../context/QuestionsContext';

interface AnswersType {
	text: string;
	isSelect: boolean;
	isCorrect: boolean;
	id: number;
}

export function useAnswers() {
	const { question } = useQuestion();
	const { incorrect_answers, correct_answer } = question;

	const [answers, setAnswers] = useState<AnswersType[]>([]);

	const settingAnswers = useCallback((answersCustom: Array<string>) => {
		const setAnswers = answersCustom.map((answer) => {
			return {
				text: answer,
				isSelect: false,
				isCorrect: false,
				id: generateId(),
			};
		});
		return setAnswers;
	}, []);

	function generateId() {
		return Math.floor(Math.random() * 1000000);
	}

	useEffect(() => {
		if (!incorrect_answers || !correct_answer) return;

		// criando modelo de respostas

		const preparingIncorrectAnswer = settingAnswers(incorrect_answers);
		const preparingCorrectAnswer = {
			text: correct_answer,
			isSelect: false,
			isCorrect: true,
			id: generateId(),
		};

		// Juntando respostas em um array
		const preparingAnswers = preparingIncorrectAnswer;
		preparingAnswers.push(preparingCorrectAnswer);

		// Embaralhando Respostas
		const currentAnswers = shuffle(preparingAnswers);

		// Settando Respostas
		setAnswers(currentAnswers);
	}, [incorrect_answers, correct_answer, settingAnswers]);

	// Função Embaralhar
	function shuffle(elements: Array<AnswersType>) {
		return elements
			.map((element) => ({ element, aleatorio: Math.random() }))
			.sort((obj, obj2) => obj.aleatorio - obj2.aleatorio)
			.map((obj) => obj.element);
	}

	return { answers, setAnswers };
}
