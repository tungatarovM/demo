import { random, getMaxDigitIndex, getMinDigitIndex } from '../toolkit/tools';
import { gameLogic } from '../index';

const transform = (num) => {
  const arrayOfNums = num.toString().split('').map(element => parseInt(element, 10));
  return arrayOfNums;
};

const isBalanced = (arrayOfNums, maxDigitIndex, minDigitIndex) =>
  (arrayOfNums[maxDigitIndex] - arrayOfNums[minDigitIndex] <= 1);

const balanceNumber = (arrayOfNums, maxDigitIndex, minDigitIndex) => {
  return arrayOfNums.map((element, index) => {
    if (index === minDigitIndex) {
      return element + 1;
    }
    if (index === maxDigitIndex) {
      return element - 1;
    }
    return element;
  });
};

const getBalanceNumber = (arrayOfNums) => {
  const maxDigitIndex = getMaxDigitIndex(arrayOfNums);
  const minDigitIndex = getMinDigitIndex(arrayOfNums);
  if (isBalanced(arrayOfNums, maxDigitIndex, minDigitIndex)) {
    return arrayOfNums;
  }
  return getBalanceNumber(balanceNumber(arrayOfNums, maxDigitIndex, minDigitIndex));
};


const gameData = () => {
  const rule = 'Balance the given number.';
  const randomNum = random();
  const question = `${randomNum}`;
  const correctAnswer = getBalanceNumber(transform(randomNum));
  return [rule, question, correctAnswer];
};

export const balance = () => gameLogic(gameData);
