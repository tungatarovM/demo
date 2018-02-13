import readlineSync from 'readline-sync';


export const authentification = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}`);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const isEvenGame = (userName) => {
  const iter = (points) => {
    if (points) {
      return `Congratulations ${userName}`;
    }
    const randomNum = Math.random();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer? ');
    if (isEven(randomNum)) {
      if (answer === 'yes') return iter(points + 1);
      return `${answer} is wrong answer ;(. Correct answer was 'yes'. 
              Let's try again, ${userName}!`;
    } else if (!isEven(randomNum)) {
      if (answer === 'no') {
        return iter(points + 1);
      }
      return `${answer} is wrong answer ;(. Correct answer was 'yes'. 
              Let's try again, ${userName}!`;
    }
  };
  return iter(0);
};
