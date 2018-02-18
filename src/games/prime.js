import { gameLogic } from '../index';
import { random } from '../toolkit/tools';


const getCorrectAnswer = (num) => {
  const iter = (divisor) => {
    if (divisor > num / 2) {
      return 'yes';
    }
    if (num % divisor === 0) {
      return 'no';
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const gameData = () => {
  const rule = 'Is this number prime?';
  const num = random();
  const question = `${num}`;
  const correctAnswer = getCorrectAnswer(num);
  return [rule, question, correctAnswer];
};

export const prime = () => gameLogic(gameData);
