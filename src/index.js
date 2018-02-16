import readlineSync from 'readline-sync';

export const successPoints = 2;

export const greeting = () => console.log('Welcome to the Brain Games!');

export const authentification = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}`);
  return userName;
};
export const successMessage = userName => console.log(`Congratulations ${userName}`);
export const correctMessage = () => console.log('Correct');
export const wrongMessage = (correctAnswer, answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again`);
};

export const startGame = (game) => {
  greeting();
  const userName = authentification();
  game(userName);
};
