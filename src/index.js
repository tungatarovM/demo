import readlineSync from 'readline-sync';


export const authentification = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}`);
  return userName;
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const brainEven = () => {
  const userName = authentification();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const iter = (points) => {
    if (points >= 3) {
      console.log(`Congratulations ${userName}`);
      return null;
    }
    const randomNum = Math.round((Math.random() * 100) + 1);
    const answer = readlineSync.question(`Question: ${randomNum} `);
    const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
    const message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`;
    if (isEven(randomNum)) {
      if (answer === 'yes') {
        console.log('Correct');
        return iter(points + 1);
      }
      console.log(`${message}`);
    } else {
      if (answer === 'no') {
        console.log('Correct');
        return iter(points + 1);
      }
      console.log(`${message}`);
      return null;
    }
  };
  return iter(0);
};
