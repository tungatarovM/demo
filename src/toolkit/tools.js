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

export const greatestCommonDivFinder = (smallNum, biggerNum) => {
  if (biggerNum === 0) {
    return smallNum;
  }
  return greatestCommonDivFinder(smallNum, biggerNum % smallNum);
};
