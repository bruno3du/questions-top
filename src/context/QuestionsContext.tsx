/** @format */

import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { api } from '../services/api';

interface QuestionProviderProps {
	children: ReactNode;
}

interface Question {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: Array<string>;
}

interface CustomQuestionFunction {
	question: Question;
	nextQuestion: () => void;
	previousQuestion: () => void;
}

export const QuestionsContext = createContext({} as CustomQuestionFunction);

export function QuestionProvider({ children }: QuestionProviderProps) {
	const [fetchQuestions, setFetchQuestions] = useState<Question[]>();
	const [question, setQuestion] = useState({} as Question);

	const indexQuestion = useCallback(
		(current: number = 0) => {
			if (fetchQuestions) return fetchQuestions[current];
		},
		[fetchQuestions]
	);

	// Buscando as questões na API

	useEffect(() => {
		api(`api.php?amount=${10}&type=multiple`).then((res) =>
			setFetchQuestions(res.data.results)
		);
	}, []);

	useEffect(() => {
		if (fetchQuestions) {
			const customQuestionIndex = indexQuestion();
			if (customQuestionIndex) setQuestion(customQuestionIndex);
		}
	}, [fetchQuestions, indexQuestion]);

	function nextQuestion() {
	//Previnir inexistencia de fetchQuestions
	if (!fetchQuestions) return;

	//Setando elemento atual
	const customQuestionIndex = question;

	//Previnir inexistencia de customQuestionIndex
	if (!customQuestionIndex) return;

	// Verificando index Atual
	const indexAtual = fetchQuestions.indexOf(customQuestionIndex);

	// Setando Nova Questão pelo index.
	const newQuestion = indexQuestion(indexAtual + 1);

	// Se newQuestion for verdadeiro, ele retorna nova questão
	if (newQuestion) setQuestion(newQuestion);

	console.log(newQuestion);
	}

	function previousQuestion() {
		//Previnir inexistencia de fetchQuestions
		if (!fetchQuestions) return;

		//Setando elemento atual
		const customQuestionIndex = question;

		//Previnir inexistencia de customQuestionIndex
		if (!customQuestionIndex) return;

		// Verificando index Atual
		const indexAtual = fetchQuestions.indexOf(customQuestionIndex);

		// Setando Nova Questão pelo index.
		const newQuestion = indexQuestion(indexAtual - 1);

		// Se newQuestion for verdadeiro, ele retorna nova questão
		if (newQuestion) setQuestion(newQuestion);

		console.log(newQuestion);
	}

	return (
		<QuestionsContext.Provider
			value={{ question, previousQuestion, nextQuestion }}>
			{children}
		</QuestionsContext.Provider>
	);
}

export function useQuestion() {
	const question = useContext<CustomQuestionFunction>(QuestionsContext);

	return question;
}
