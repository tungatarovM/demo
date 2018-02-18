import { gameLogic } from '../index';
import { random } from '../toolkit/tools';


const sequenceLength = 9;

const createSequence = (startNumber, range, blankNumIndex) => {
  const sequence = [];
  const iter = (index) => {
    if (index > sequenceLength) {
      return sequence;
    }
    if (index === blankNumIndex) {
      sequence[blankNumIndex] = '..';
    }
    if (!sequence[index]) {
      sequence[index] = startNumber + (range * index);
    }
    return iter(index + 1);
  };
  return iter(0);
};

const createQuestion = sequence =>
  sequence.reduce((acc, value) => (`${acc} ${value}`), '');

const getCorrectAnswer = (sequence, range, blankNumIndex) => {
  if (blankNumIndex === 0) {
    const nextNumber = sequence[(blankNumIndex + 1)];
    const correctAnswer = nextNumber - range;
    return correctAnswer;
  }
  const previousNumber = sequence[(blankNumIndex - 1)];
  const correctAnswer = previousNumber + range;
  return correctAnswer;
};

const gameData = () => {
  const startNumber = random();
  const range = random();
  const blankNumIndex = random(0, 9);
  const rule = 'What number is missing in this progression?';
  const sequence = createSequence(startNumber, range, blankNumIndex);
  const question = createQuestion(sequence);
  const correctAnswer = getCorrectAnswer(sequence, range, blankNumIndex);
  return [rule, question, correctAnswer];
};

export const progression = () => gameLogic(gameData);

