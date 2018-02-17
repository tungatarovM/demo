import readlineSync from 'readline-sync';
import { random, isEven } from '../toolkit/tools';
import { gameLogic } from '../index';


const gameData = () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  const randomNumber = random();
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber);
  return [rule, question, correctAnswer];
};

export const even = () => gameLogic(gameData);
