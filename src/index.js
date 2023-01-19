import './style.css';
import createList from '../modules/createList.js';

const todo = document.querySelector('.to-do');
const list = [];

createList(todo, list);