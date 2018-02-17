import { random, getMaxDigitIndex, getMinDigitIndex } from '../toolkit/tools';
import { gameLogic } from '../index';

const isBalanced = (arrayOfNums, maxDigitIndex, minDigitIndex) =>
  (arrayOfNums[maxDigitIndex] - arrayOfNums[minDigitIndex] <= 1);

const balanceNumber = (arrayOfNums, maxDigitIndex, minDigitIndex) =>
  arrayOfNums.map((element, index) => {
    if (index === minDigitIndex) {
      return element + 1;
    }
    if (index === maxDigitIndex) {
      return element - 1;
    }
    return element;
  });

const getBalancedNumber = (arrayOfNums) => {
  const maxDigitIndex = getMaxDigitIndex(arrayOfNums);
  const minDigitIndex = getMinDigitIndex(arrayOfNums);
  if (isBalanced(arrayOfNums, maxDigitIndex, minDigitIndex)) {
    return arrayOfNums;
  }
  return getBalancedNumber(balanceNumber(arrayOfNums, maxDigitIndex, minDigitIndex));
};

const getCorrectAnswer = (num) => {
  const splitNumber = Array.from(num.toString()).map(item => Number(item));
  const balancedNumber = getBalancedNumber(splitNumber);
  return balancedNumber.sort().join('');
};

const gameData = () => {
  const rule = 'Balance the given number.';
  const randomNum = random(0, 1000);
  const question = `${randomNum}`;
  const correctAnswer = getCorrectAnswer(randomNum);
  return [rule, question, correctAnswer];
};

export const balance = () => gameLogic(gameData);
