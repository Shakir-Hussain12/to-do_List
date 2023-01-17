import './style.css';
import createList from '../modules/createList.js';

const todo = document.querySelector('.to-do');
const list = [
  {
    description: 'First Thing',
    completed: false,
    index: 1,
  },
  {
    description: 'Second Thing',
    completed: false,
    index: 2,
  },
  {
    description: 'Third Thing',
    completed: false,
    index: 3,
  },
];

createList(todo, list);