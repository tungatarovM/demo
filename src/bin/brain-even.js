import authentification from '../index';
import isEvenGame from '../isEven';

const name = authentification();
isEvenGame(name);
