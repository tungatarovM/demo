import readlineSync from 'readline-sync';
import { random, euclidsAlg, increasingOrder } from '../toolkit/tools';
import { gameLogic } from '../index';


const gameData = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const firstNum = random();
  const secondNum = random();
  const twoNums = increasingOrder(firstNum, secondNum);
  const question = `Question: ${firstNum} ${secondNum}.\nYour answer: `;
  const correctAnswer = euclidsAlg(...twoNums);
  return [rule, question, correctAnswer];
};


export const gcd = () => gameLogic(gameData);
