import { gameLogic } from '../index';
import { random } from '../toolkit/tools';


const isPrime = (num) => {
  const iter = (divisor) => {
    if (divisor > num / 2) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};


const gameData = () => {
  const rule = 'Is this number prime?';
  const num = random();
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [rule, question, correctAnswer];
};

export const prime = () => gameLogic(gameData);
