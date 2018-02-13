import readlineSync from 'readline-sync';
import isEvenGame from './isEven';


const authentification = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}`);
  isEvenGame(userName);
};

export default authentification;
