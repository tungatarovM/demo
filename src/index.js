import readlineSync from 'readline-sync';

export const successPoints = 2;

export const greeting = () => console.log('Welcome to the Brain Games!');

export const authentification = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}`);
  return userName;
};
const showRules = (gameData) => {
  const [rule] = gameData();
  console.log(rule);
};
export const successMessage = userName => console.log(`Congratulations ${userName}`);
export const correctMessage = () => console.log('Correct');
export const wrongMessage = (correctAnswer, answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again`);
};

const prompt = question => readlineSync.question(question);


export const gameLogic = (game) => {
  greeting();
  const userName = authentification();
  showRules(game);
  const iter = (points) => {
    if (points > successPoints) {
      return successMessage(userName);
    }
    const [, question, correctAnswer] = game();
    const answer = prompt(question);
    if (correctAnswer == answer) {
      correctMessage();
      return iter(points + 1);
    } else if (correctAnswer != answer) {
      return wrongMessage(correctAnswer, answer);
    }
  };
  return iter(0);
};
