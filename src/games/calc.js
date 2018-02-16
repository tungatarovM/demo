import readlineSync from 'readline-sync';
import { random, randomOperator, signChecker, prompt, isCorrect } from '../toolkit/tools';
import { startGame, succesPoints, correctMessage, wrongMessage, successMessage } from '../index';


const rule = 'What is the result of the expression?';

export const calc = (userName) => {
  const iter = (points) => {
    const firstNum = random();
    const secondNum = random();
    const operator = randomOperator();
    const question = `Question: ${firstNum} ${operator} ${secondNum} \nYour answer: `;
    const answer = prompt(question);
    const correctAnswer = signChecker(firstNum, secondNum, operator);
    if (points > succesPoints) {
      return successMessage(userName);
    }
    if (isCorrect(correctAnswer, answer)) {
      correctMessage();
      return iter(points + 1);
    }
    return wrongMessage(correctAnswer, answer);
  };
  return iter(0);
};