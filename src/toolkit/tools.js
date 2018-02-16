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

export const prompt = question => readlineSync.question(`${question}`);

export const isCorrect = (correctAnswer, answer) => {
  if (answer == correctAnswer) {
    return true;
  }
  return false;
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
