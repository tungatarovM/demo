import readlineSync from 'readline-sync';


const authentification = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}`);
  return userName;
};
export default authentification;

