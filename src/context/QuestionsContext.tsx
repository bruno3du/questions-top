/** @format */

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { answerModel } from "../model/answerModel";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { api } from "../services/api";

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

interface AnswersType {
  text: string;
  isSelect: boolean;
  isCorrect: boolean;
  id: number;
}

interface NewQuestionType {
  id: number;
  question: string;
  category: string;
  options: AnswersType[];
}

interface CustomQuestionFunction {
  question: NewQuestionType;
  nextQuestion: () => void;
  previousQuestion: () => void;
  startQuestion: (amount: number) => void;
  setSelected: (id: number) => void;
}

export const QuestionsContext = createContext({} as CustomQuestionFunction);

export function QuestionProvider({ children }: QuestionProviderProps) {
  const [fetchQuestions, setFetchQuestions] = useState([] as Question[]);
  const [question, setQuestion] = useLocalStorage(
    "thisQuestion",
    {} as NewQuestionType
  );
  const [newListQuestion, setNewListQuestion] = useLocalStorage(
    "questoes",
    [] as NewQuestionType[]
  );

  const indexQuestion = useCallback(
    (current: number = 0) => {
      if (newListQuestion) return newListQuestion[current];
    },
    [newListQuestion]
  );

  function generateId() {
    return Math.floor(Math.random() * 10000000);
  }

  const newListQuestionModel = useCallback(() => {
    return fetchQuestions.map((question) => {
      // Função modelar respostas e retornar um array completo

      const answers = answerModel(
        question.correct_answer,
        question.incorrect_answers
      );

      if (!answers) {
        return question;
      }

      return {
        id: generateId(),
        question: question.question,
        category: question.category,
        options: answers,
      };
    });
  }, [fetchQuestions]);

  useEffect(() => {
    // tranformando dados da api em novo objeto

    if (newListQuestion.length !== 0) {
      return;
    }
    const newList = newListQuestionModel();

    if (newList) setNewListQuestion(newList as NewQuestionType[]);

    // eslint-disable-next-line
  }, [fetchQuestions]);

  useEffect(() => {
    const indexAtual = verifyingIndex();
    if (!indexAtual && indexAtual !== 0) return;

    const customQuestionIndex = indexQuestion(indexAtual); // indexQuestion tem index 0 por padrão

    if (customQuestionIndex) setQuestion(customQuestionIndex);

    // eslint-disable-next-line
  }, []);

  async function startQuestion(amount: number) {
    await api(`api.php?amount=${amount}&type=multiple`).then((res) => {
      setFetchQuestions(res.data.results);
    });

    const customQuestionIndex = indexQuestion(); // indexQuestion tem index 0 por padrão
    if (customQuestionIndex) setQuestion(customQuestionIndex);
  }

  function verifyingIndex() {
    //Previnir inexistencia de newListQuestion
    if (newListQuestion.length === 0) return;

    // Verificando index Atual
    const indexQuestion = newListQuestion.indexOf(question);
    // console.log(question, newListQuestion);
    return indexQuestion;
  }

  function nextQuestion() {
    const indexAtual = verifyingIndex();

    if (!indexAtual && indexAtual !== 0) return;

    // Setando Nova Questão pelo index.
    const thisQuestion = indexQuestion(indexAtual + 1);

    // Se newQuestion for verdadeiro, ele retorna nova questão
    if (thisQuestion) setQuestion(thisQuestion);
  }

  function previousQuestion() {
    const indexAtual = verifyingIndex();
    if (!indexAtual && indexAtual !== 0) return;

    // Setando Nova Questão pelo index.
    const newQuestion = indexQuestion(indexAtual - 1);

    // Se newQuestion for verdadeiro, ele retorna nova questão
    if (newQuestion) setQuestion(newQuestion);
  }

  function setSelected(id: number) {
    const indexAtual = verifyingIndex();

    const answers = question.options;
    const newAnswers: AnswersType[] = answers.map((answer) => {
      if (answer.id === id) {
        answer.isSelect = !answer.isSelect;
        return answer;
      } else {
        answer.isSelect = false;
        return answer;
      }
    });

    const newQuestion = {
      id: question.id,
      question: question.question,
      category: question.category,
      options: newAnswers,
    };
    setQuestion(newQuestion);

    const listQuestion = newListQuestion.map((listQuestion) => {
      if (listQuestion.id === question.id) {
        return question;
      } else {
        return listQuestion;
      }
    });

    setNewListQuestion(listQuestion);

    if (!indexAtual && indexAtual !== 0) return;

    // Setando Nova Questão pelo index.
    const thisQuestion = indexQuestion(indexAtual);

    // Se newQuestion for verdadeiro, ele retorna nova questão
    if (thisQuestion) setQuestion(thisQuestion);
  }

  return (
    <QuestionsContext.Provider
      value={{
        question,
        previousQuestion,
        nextQuestion,
        startQuestion,
        setSelected,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestion() {
  const question = useContext<CustomQuestionFunction>(QuestionsContext);

  return question;
}
