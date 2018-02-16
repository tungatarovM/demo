import readlineSync from 'readline-sync';
import { random, greatestCommonDivFinder, increasingOrder } from '../toolkit/tools';
import { gameLogic } from '../index';


const gameData = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const firstNum = random();
  const secondNum = random();
  const arrayofNums = increasingOrder(firstNum, secondNum);
  const question = `Question: ${firstNum} ${secondNum}.\nYour answer: `;
  const correctAnswer = greatestCommonDivFinder(...arrayofNums);
  return [rule, question, correctAnswer];
};


export const gcd = () => gameLogic(gameData);
