import readlineSync from 'readline-sync';
import { random, randomOperator, signChecker } from '../toolkit/tools';
import { gameLogic } from '../index';


const gameData = () => {
  const rule = 'What is the result of the expression?';
  const firstNum = random();
  const secondNum = random();
  const operator = randomOperator();
  const question = `Question: ${firstNum} ${operator} ${secondNum} \nYour answer: `;
  const correctAnswer = signChecker(firstNum, secondNum, operator);
  return [rule, question, correctAnswer];
};

export const calculator = () => gameLogic(gameData);
