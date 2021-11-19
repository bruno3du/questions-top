/** @format */

interface AnswersType {
  text: string;
  isSelect: boolean;
  isCorrect: boolean;
  id: number;
}

export function answerModel(
  correctAnswer: string,
  incorrectAnswers: Array<string>
) {

  //Chamando função principal
  const answers = joinAnswers();

  function settingAnswers(answersCustom: Array<string>) {
    const newAnswer = answersCustom.map((answer) => {
      return {
        text: answer,
        isSelect: false,
        isCorrect: false,
        id: generateId(),
      };
    });
    return newAnswer;
  }

  function generateId() {
    return Math.floor(Math.random() * 10000000);
  }

  function joinAnswers() {
    if (!incorrectAnswers || !correctAnswer) return;

    // criando modelo de respostas

    const preparingIncorrectAnswer = settingAnswers(incorrectAnswers);
    const preparingCorrectAnswer = {
      text: correctAnswer,
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
    return currentAnswers;
  }

  // Função Embaralhar
  function shuffle(elements: Array<AnswersType>) {
    return elements
      .map((element) => ({ element, aleatorio: Math.random() }))
      .sort((obj, obj2) => obj.aleatorio - obj2.aleatorio)
      .map((obj) => obj.element);
  }

  return answers;
}
