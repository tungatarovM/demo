import readlineSync from 'readline-sync';


const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isEvenGame = (userName) => {
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

export default isEvenGame;

