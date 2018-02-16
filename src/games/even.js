import readlineSync from 'readline-sync';
import { random, randomOperator, signChecker, prompt, isCorrect, isEven } from '../toolkit/tools';
import { startGame, succesPoints, correctMessage, wrongMessage, successMessage } from '../index';

const rule = 'Answer "yes" if number even otherwise answer "no".';

export const even = (userName) => {
  const iter = (points) => {
    if (points > succesPoints) {
      return successMessage(userName);
    }
    const randomNumber = random();
    const question = `Question: ${randomNumber} \nYour answer: `;
    const answer = prompt(question);
    const correctAnswer = isEven(randomNumber);
    if (isCorrect(correctAnswer, answer)) {
      correctMessage();
      return iter(points + 1);
    }
    return wrongMessage(correctAnswer, answer);
  };
  return iter(0);
};
