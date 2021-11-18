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
  question: string;
  category: string;
  options: AnswersType[];
}

interface CustomQuestionFunction {
  question: NewQuestionType;
  nextQuestion: () => void;
  previousQuestion: () => void;
}

export const QuestionsContext = createContext({} as CustomQuestionFunction);

export function QuestionProvider({ children }: QuestionProviderProps) {
  const [fetchQuestions, setFetchQuestions] = useState([] as Question[]);
  const [question, setQuestion] = useState({} as NewQuestionType);
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
        question: question.question,
        category: question.category,
        options: answers,
      };
    });
  }, [fetchQuestions]);

  // Buscando as questões na API
  useEffect(() => {
    if (newListQuestion.length > 0) {
      return;
    }
    api(`api.php?amount=${10}&type=multiple`).then((res) =>
      setFetchQuestions(res.data.results)
    );
  }, [newListQuestion]);

  useEffect(() => {
    // tranformando dados da api em novo objeto
    const newList = newListQuestionModel();
    if (newList) {
      console.log(newList);
      setNewListQuestion(newList as NewQuestionType[]);
    }
  }, [newListQuestionModel]);

  useEffect(() => {
    // Settando primeira questão
    if (newListQuestion.length !== 0) {
      const customQuestionIndex = indexQuestion(); // indexQuestion tem index 0 por padrão
      if (customQuestionIndex) setQuestion(customQuestionIndex);
    }
  }, [newListQuestion, indexQuestion]);

  function nextQuestion() {
    //Previnir inexistencia de newListQuestion
    if (!newListQuestion) return;

    //Setando elemento atual
    const customQuestionIndex = question;

    //Previnir inexistencia de customQuestionIndex
    if (!customQuestionIndex) return;

    // Verificando index Atual
    const indexAtual = newListQuestion.indexOf(customQuestionIndex);
    console.log(newListQuestion);

    // Setando Nova Questão pelo index.
    const newQuestion = indexQuestion(indexAtual + 1);

    // Se newQuestion for verdadeiro, ele retorna nova questão
    if (newQuestion) setQuestion(newQuestion);
  }

  function previousQuestion() {
    //Previnir inexistencia de fetchQuestions
    if (!newListQuestion) return;

    //Setando elemento atual
    const customQuestionIndex = question;

    //Previnir inexistencia de customQuestionIndex
    if (!customQuestionIndex) return;

    // Verificando index Atual
    const indexAtual = newListQuestion.indexOf(customQuestionIndex);

    // Setando Nova Questão pelo index.
    const newQuestion = indexQuestion(indexAtual - 1);

    // Se newQuestion for verdadeiro, ele retorna nova questão
    if (newQuestion) setQuestion(newQuestion);
  }

  return (
    <QuestionsContext.Provider
      value={{ question, previousQuestion, nextQuestion }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestion() {
  const question = useContext<CustomQuestionFunction>(QuestionsContext);

  return question;
}
