/** @format */

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { api } from '../api';

export const QuestionsContext = createContext({} as Question);

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

export function QuestionProvider({ children }: QuestionProviderProps) {
	const [fetchQuestions, setFetchQuestions] = useState<Question[]>();
	const [question, setQuestion] = useState({} as Question);

	useEffect(() => {
		api(`api.php?amount=${10}&type=multiple`).then((res) =>
			setFetchQuestions(res.data.results)
		);
	}, []);

	useEffect(() => {
		if (fetchQuestions) {
			setQuestion(fetchQuestions[0]);
		}
	}, [fetchQuestions]);

	return (
		<QuestionsContext.Provider value={question}>
			{children}
		</QuestionsContext.Provider>
	);
}

export function useQuestion() {
	const question = useContext<Question>(QuestionsContext);
	return question;
}
