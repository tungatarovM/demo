import readlineSync from 'readline-sync';

export const random = (min = 0, max = 101) => (Math.round((Math.random() * (max - min))) + min);

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[random(0, 2)];
  return operator;
};

export const signChecker = (firstNum, secondNum, sign) => {
  if (sign === '+') {
    return firstNum + secondNum;
  } else if (sign === '-') {
    return firstNum - secondNum;
  }
  return firstNum * secondNum;
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const increasingOrder = (firstNum, secondNum) => {
  if (firstNum < secondNum) {
    return [firstNum, secondNum];
  }
  return [secondNum, firstNum];
};

export const euclidsAlg = (smallNum, biggerNum) => {
  const remainder = smallNum % biggerNum;
  return remainder === 0 ? biggerNum : euclidsAlg(biggerNum, remainder);
};

export const getMaxDigitIndex = arrayOfNums =>
  arrayOfNums.reduce((acc, element, index) => (element > arrayOfNums[acc] ? index : acc), 0);

export const getMinDigitIndex = arrayOfNums =>
  arrayOfNums.reduce((acc, element, index) => (element < arrayOfNums[acc]), 0);

